import { Link } from "@tanstack/react-router";

export function Logo({ tone = "green" }: { tone?: "green" | "light" }) {
  return (
    <Link to="/" className="group inline-flex items-baseline gap-0.5" aria-label="Facto — página inicial">
      <span
        className={`text-2xl font-extrabold tracking-tighter lowercase ${
          tone === "light" ? "text-primary-foreground" : "text-primary"
        }`}
      >
        facto
      </span>
      <span className="size-2 rounded-full bg-brand-lime transition-transform group-hover:scale-125" />
    </Link>
  );
}
