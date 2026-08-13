import { useEffect, useState } from "react";
import "./MediaPhoneCarousel.css";

// ======================================================
// IMAGENS DO CARROSSEL DE GERENCIAMENTO DE MÍDIAS
// Adicione, remova ou substitua as imagens aqui.
//
// Como trocar:
// 1. Coloque o novo arquivo dentro de public/servicos/gerenciamento-de-midias/
// 2. Adicione (ou troque) o caminho correspondente na lista abaixo,
//    sempre começando com "/servicos/gerenciamento-de-midias/...".
// 3. Salve — o carrossel se ajusta sozinho para qualquer quantidade de imagens.
// ======================================================
const mediaImages: string[] = [
  "/servicos/gerenciamento-de-midias/exemplo-01.jpg",
  "/servicos/gerenciamento-de-midias/exemplo-02.png",
  "/servicos/gerenciamento-de-midias/exemplo-03.jpeg",
];

const AUTOPLAY_MS = 3000;

export function MediaPhoneCarousel({ images, alt }: { images?: string[]; alt?: string }) {
  // Sem imagens vindas de fora (prop), usa a lista fixa lá em cima —
  // é o caso da aba de serviço "Gerenciamento de Mídias".
  const slides = images?.length ? images : mediaImages;

  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    setCurrent(0);
  }, [slides]);

  useEffect(() => {
    if (slides.length < 2 || paused) return;
    const id = setInterval(() => {
      setCurrent((i) => (i + 1) % slides.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, slides]);

  if (slides.length === 0) return null;

  const goTo = (index: number) => setCurrent(index);
  const label = alt ?? "Gerenciamento de mídias";

  return (
    <div className="media-phone-scene">
      <div className="media-phone-float">
        <div
          className="media-phone-tilt"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="media-phone-shadow" aria-hidden="true" />
          <div className="media-phone">
            <div className="media-phone-screen">
              <div className="media-phone-island" />

              <div
                className="media-phone-track"
                style={{ transform: `translateX(-${current * 100}%)` }}
              >
                {slides.map((src, index) => (
                  <div className="media-phone-slide" key={src}>
                    <img src={src} alt={`${label} — exemplo ${index + 1}`} loading="lazy" />
                  </div>
                ))}
              </div>

              {slides.length > 1 && (
                <div className="media-phone-dots">
                  {slides.map((src, index) => (
                    <button
                      key={src}
                      type="button"
                      className={`media-phone-dot${index === current ? " is-active" : ""}`}
                      aria-label={`Ver imagem ${index + 1}`}
                      onClick={() => goTo(index)}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}