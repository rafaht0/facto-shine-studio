/**
 * Limite simples de tentativas de envio, guardado no localStorage do navegador.
 * Não substitui proteção no servidor — é só uma barreira a mais contra reenvios
 * acidentais ou scripts básicos, complementando o honeypot e o reCAPTCHA.
 */

const STORAGE_KEY = "facto-diagnostico-envios";
const WINDOW_MS = 10 * 60 * 1000;
const MAX_ATTEMPTS = 3;

function readTimestamps(): number[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? (JSON.parse(raw) as unknown) : [];
    return Array.isArray(parsed) ? parsed.filter((t): t is number => typeof t === "number") : [];
  } catch {
    return [];
  }
}

function recentTimestamps(): number[] {
  const now = Date.now();
  return readTimestamps().filter((t) => now - t < WINDOW_MS);
}

export function checkRateLimit(): { allowed: boolean; retryInMinutes: number } {
  const recent = recentTimestamps();
  if (recent.length < MAX_ATTEMPTS) return { allowed: true, retryInMinutes: 0 };

  const oldest = Math.min(...recent);
  const retryInMs = WINDOW_MS - (Date.now() - oldest);
  return { allowed: false, retryInMinutes: Math.max(1, Math.ceil(retryInMs / 60000)) };
}

export function registerSubmission(): void {
  if (typeof window === "undefined") return;
  const recent = recentTimestamps();
  recent.push(Date.now());
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(recent));
}
