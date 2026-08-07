export type ShapeKind = "star" | "burst" | "flower" | "hex" | "sparkle" | "blob" | "dot" | "spark";

const paths: Record<ShapeKind, string> = {
  star: "M50 2 61 36 97 36 68 57 79 92 50 71 21 92 32 57 3 36 39 36Z",
  burst:
    "M50 0c6 0 9 12 14 14s14-6 18-2-2 13 0 18 14 6 14 12-12 9-14 14 6 14 2 18-13-2-18 0-6 14-12 14-9-12-14-14-14 6-18 2 2-13 0-18-14-6-14-12 12-9 14-14-6-14-2-18 13 2 18 0 6-14 12-14Z",
  flower:
    "M50 6a16 16 0 110 32 16 16 0 010-32Zm-30 22a16 16 0 110 32 16 16 0 010-32Zm60 0a16 16 0 110 32 16 16 0 010-32ZM32 62a16 16 0 110 32 16 16 0 010-32Zm36 0a16 16 0 110 32 16 16 0 010-32Z",
  hex: "M50 3 91 26v48L50 97 9 74V26Z",
  sparkle:
    "M50 0 57 30l22-19-13 25 30-6-26 15 26 15-30-6 13 25-22-19-7 30-7-30-22 19 13-25-30 6 26-15L2 30l30 6-13-25 22 19Z",
  blob: "M50 2c9 0 12 13 20 15s17-6 21 1-6 15-6 24 10 17 6 24-13-1-21 1-11 15-20 15-12-13-20-15-17 6-21-1 6-15 6-24-10-17-6-24 13 1 21-1 11-15 20-15Z",
  dot: "M50 2a48 48 0 110 96 48 48 0 010-96Z",
  spark: "M50 0C54 32 68 46 100 50 68 54 54 68 50 100 46 68 32 54 0 50 32 46 46 32 50 0Z",
};

export function Shape({
  kind,
  color,
  className = "",
}: {
  kind: ShapeKind;
  color?: string;
  className?: string;
}) {
  return (
    <svg viewBox="0 0 100 100" aria-hidden="true" className={className} fill={color ?? "currentColor"}>
      <path d={paths[kind]} />
    </svg>
  );
}
