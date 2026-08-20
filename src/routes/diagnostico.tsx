import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Check } from "lucide-react";
import { toast } from "sonner";
import { services } from "@/lib/services";
import { Shape } from "@/components/site/Shape";

/**
 * Endpoint do Formspree que recebe o formulário e encaminha para contato@factoagencia.com.br.
 * Configurado via variável de ambiente (ver .env.example) — não é um segredo, é só o endereço
 * público do formulário, mas assim fica fácil trocar sem mexer no código.
 */
const FORMSPREE_ENDPOINT = import.meta.env["VITE_FORMSPREE_ENDPOINT"] as string | undefined;

export const Route = createFileRoute("/diagnostico")({
  head: () => ({
    meta: [
      { title: "Solicitar diagnóstico — Facto Agência Júnior" },
      {
        name: "description",
        content:
          "Preencha o formulário com nome, e-mail e telefone com DDD e receba um diagnóstico de comunicação da Facto.",
      },
      { property: "og:title", content: "Solicitar diagnóstico — Facto" },
      {
        property: "og:description",
        content: "Um olhar técnico e gratuito sobre a comunicação do seu negócio.",
      },
    ],
  }),
  component: Diagnostico,
});

const schema = z.object({
  nome: z.string().trim().min(2, "Informe seu nome completo.").max(100, "Nome muito longo."),
  email: z.string().trim().email("Informe um e-mail válido.").max(255),
  telefone: z
    .string()
    .trim()
    .regex(/^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/, "Informe o telefone com DDD. Ex: (61) 99999-9999"),
  servico: z.string().max(120).optional(),
  mensagem: z.string().trim().max(1000, "Máximo de 1000 caracteres.").optional(),
});

type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

const fieldClass =
  "w-full rounded-md border border-input bg-background px-4 py-3 text-base text-foreground outline-none transition-colors focus:border-primary";
const labelClass = "mb-2 block text-xs font-bold uppercase tracking-widest text-brand-forest";

function Diagnostico() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (sending) return;

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    const result = schema.safeParse(data);
    if (!result.success) {
      const next: Errors = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof Errors;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }
    setErrors({});

    // honeypot: campo invisível que só um bot preencheria. Se vier preenchido,
    // finge sucesso sem realmente enviar nada.
    if (typeof data["_gotcha"] === "string" && data["_gotcha"].trim() !== "") {
      form.reset();
      setSent(true);
      return;
    }

    if (!FORMSPREE_ENDPOINT) {
      console.error(
        "VITE_FORMSPREE_ENDPOINT não está configurado — defina essa variável de ambiente para habilitar o envio do formulário.",
      );
      toast.error("Não foi possível enviar sua solicitação. Tente novamente em alguns instantes.");
      return;
    }

    setSending(true);
    try {
      const payload = new FormData(form);
      payload.set("_subject", "Nova solicitação de diagnóstico — Facto Agência Júnior");
      payload.set("_replyto", result.data.email);

      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: payload,
      });

      if (!res.ok) throw new Error(`Formspree respondeu ${res.status}`);

      form.reset();
      setSent(true);
      toast.success("Solicitação enviada com sucesso!", {
        description: "Recebemos suas informações. Nossa equipe entrará em contato em breve.",
      });
    } catch (err) {
      console.error("Falha ao enviar formulário de diagnóstico:", err);
      toast.error("Não foi possível enviar sua solicitação. Tente novamente em alguns instantes.");
    } finally {
      setSending(false);
    }
  }

  return (
    <div>
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">Diagnóstico</p>
          <h1 className="headline mt-4 max-w-3xl text-4xl text-brand-forest sm:text-5xl md:text-6xl">
            Solicite um diagnóstico da sua comunicação
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Conte um pouco sobre o seu negócio. Nosso time analisa o cenário atual e retorna com os primeiros
            apontamentos.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-14 px-5 py-20 md:grid-cols-[1.2fr_1fr]">
        <div>
          {sent ? (
            <div className="rounded-lg border-2 border-primary p-10">
              <Check className="size-10 text-primary" />
              <h2 className="mt-5 text-2xl font-extrabold uppercase text-brand-forest">Solicitação enviada!</h2>
              <p className="mt-3 text-muted-foreground">
                Obrigado pelo contato. Nosso time da Facto vai analisar suas informações e retornar pelo e-mail ou
                telefone informado.
              </p>
              <button
                type="button"
                onClick={() => setSent(false)}
                className="mt-8 rounded-full border-2 border-brand-forest px-6 py-3 text-sm font-bold uppercase tracking-wide text-brand-forest transition-colors hover:bg-brand-forest hover:text-primary-foreground"
              >
                Enviar outra solicitação
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="space-y-6">
              {/* honeypot antispam — invisível para pessoas, tentador para bots que preenchem tudo */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="_gotcha">Deixe este campo em branco</label>
                <input id="_gotcha" name="_gotcha" type="text" tabIndex={-1} autoComplete="off" />
              </div>

              <div>
                <label className={labelClass} htmlFor="nome">
                  Nome*
                </label>
                <input id="nome" name="nome" maxLength={100} placeholder="Seu nome completo" className={fieldClass} />
                {errors.nome && <p className="mt-2 text-sm text-destructive">{errors.nome}</p>}
              </div>

              <div>
                <label className={labelClass} htmlFor="email">
                  E-mail*
                </label>
                <input id="email" name="email" type="email" maxLength={255} placeholder="voce@empresa.com" className={fieldClass} />
                {errors.email && <p className="mt-2 text-sm text-destructive">{errors.email}</p>}
              </div>

              <div>
                <label className={labelClass} htmlFor="telefone">
                  Telefone com DDD*
                </label>
                <input id="telefone" name="telefone" inputMode="tel" maxLength={20} placeholder="(61) 99999-9999" className={fieldClass} />
                {errors.telefone && <p className="mt-2 text-sm text-destructive">{errors.telefone}</p>}
              </div>

              <div>
                <label className={labelClass} htmlFor="servico">
                  Serviço de interesse
                </label>
                <select id="servico" name="servico" defaultValue="" className={fieldClass}>
                  <option value="">Ainda não sei / quero uma recomendação</option>
                  {services.map((s) => (
                    <option key={s.slug} value={s.name}>
                      {s.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className={labelClass} htmlFor="mensagem">
                  Conte sobre o seu negócio
                </label>
                <textarea id="mensagem" name="mensagem" rows={5} maxLength={1000} className={fieldClass} />
                {errors.mensagem && <p className="mt-2 text-sm text-destructive">{errors.mensagem}</p>}
              </div>

              <button
                type="submit"
                disabled={sending}
                className="w-full rounded-full bg-primary px-8 py-4 text-sm font-bold uppercase tracking-wide text-primary-foreground transition-colors hover:bg-brand-forest disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:bg-primary sm:w-auto"
              >
                {sending ? "Enviando..." : "Enviar solicitação"}
              </button>
            </form>
          )}
        </div>

        <aside className="grain relative h-fit overflow-hidden rounded-lg bg-brand-forest p-10">
          <Shape kind="burst" color="var(--brand-lime)" className="absolute -right-6 -top-6 w-28 opacity-70" />
          <h2 className="relative z-10 text-xl font-extrabold uppercase text-primary-foreground">O que você recebe</h2>
          <ul className="relative z-10 mt-6 space-y-4 text-sm text-primary-foreground/80">
            <li className="flex gap-3">
              <Check className="size-5 shrink-0 text-brand-lime" /> Uma leitura externa e honesta da sua comunicação
              atual.
            </li>
            <li className="flex gap-3">
              <Check className="size-5 shrink-0 text-brand-lime" /> Apontamento dos principais gargalos e oportunidades.
            </li>
            <li className="flex gap-3">
              <Check className="size-5 shrink-0 text-brand-lime" /> Recomendação dos serviços que fazem sentido agora.
            </li>
          </ul>
        </aside>
      </section>
    </div>
  );
}
