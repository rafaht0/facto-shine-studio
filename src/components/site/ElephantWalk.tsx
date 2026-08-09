/**
 * Cena decorativa: floresta em parallax, com elefantinho caminhando opcional.
 * Duas camadas de árvores em parallax + elefante com balanço de tromba e orelha.
 */
export function ElephantWalk({
  className = "",
  accent = "var(--brand-lime)",
  tone = "var(--brand-forest)",
  bg = "var(--background)",
  showElephant = true,
}: {
  className?: string;
  accent?: string;
  tone?: string;
  bg?: string;
  showElephant?: boolean;
}) {
  const earColor = `color-mix(in oklab, ${bg} 78%, black)`;
  const Tree = ({ x, s, kind }: { x: number; s: number; kind: 0 | 1 | 2 }) => (
    <g transform={`translate(${x} 200) scale(${s})`}>
      <rect x="-4" y="-42" width="8" height="42" fill={tone} opacity="0.85" />
      {kind === 0 && (
        <>
          <path d="M0 -120 L34 -60 L-34 -60Z" fill={tone} />
          <path d="M0 -96 L40 -34 L-40 -34Z" fill={tone} />
        </>
      )}
      {kind === 1 && <circle cx="0" cy="-70" r="38" fill={tone} />}
      {kind === 2 && (
        <>
          <circle cx="-18" cy="-64" r="24" fill={tone} />
          <circle cx="18" cy="-70" r="28" fill={tone} />
          <circle cx="0" cy="-92" r="24" fill={tone} />
        </>
      )}
    </g>
  );

  return (
    <svg
      viewBox="0 0 1200 200"
      preserveAspectRatio="xMidYMax slice"
      aria-hidden="true"
      className={className}
    >
      {/* camada distante */}
      <g className="forest-far" opacity="0.28">
        {[0, 1, 2].map((i) => (
          <g key={i} transform={`translate(${i * 600} 0)`}>
            <Tree x={20} s={0.5} kind={2} />
            <Tree x={140} s={0.65} kind={0} />
            <Tree x={260} s={0.7} kind={1} />
            <Tree x={380} s={0.55} kind={2} />
            <Tree x={490} s={0.6} kind={0} />
            <Tree x={580} s={0.5} kind={1} />
          </g>
        ))}
      </g>

      {/* camada próxima */}
      <g className="forest-near" opacity="0.55">
        {[0, 1, 2].map((i) => (
          <g key={i} transform={`translate(${i * 600} 0)`}>
            <Tree x={20} s={1} kind={1} />
            <Tree x={140} s={0.9} kind={2} />
            <Tree x={260} s={1.1} kind={0} />
            <Tree x={380} s={0.85} kind={1} />
            <Tree x={500} s={1} kind={2} />
          </g>
        ))}
      </g>

      {/* chão */}
      <rect x="0" y="192" width="1200" height="8" fill={tone} opacity="0.5" />

      {/* moitas correndo no chão */}
      <g className="forest-near" opacity="0.7">
        {[0, 1, 2].map((i) => (
          <g key={i} transform={`translate(${i * 600} 0)`}>
            <circle cx="120" cy="194" r="9" fill={accent} />
            <circle cx="360" cy="196" r="6" fill={accent} />
            <circle cx="520" cy="193" r="11" fill={accent} />
          </g>
        ))}
      </g>

      {/* elefantinho */}
      {showElephant && (
        <g className="elephant-walk" transform="translate(560 192)">
          <g fill={tone}>
            {/* pernas */}
            <rect className="leg-a" x="-46" y="-34" width="18" height="34" rx="4" />
            <rect className="leg-b" x="-20" y="-34" width="18" height="34" rx="4" />
            <rect className="leg-b" x="10" y="-34" width="18" height="34" rx="4" />
            <rect className="leg-a" x="34" y="-34" width="18" height="34" rx="4" />
            {/* corpo */}
            <ellipse cx="0" cy="-56" rx="58" ry="38" />
            {/* rabo */}
            <path d="M56 -70 q18 6 14 26" stroke={tone} strokeWidth="5" fill="none" strokeLinecap="round" />
            {/* cabeça */}
            <circle cx="-58" cy="-62" r="30" />
            {/* orelha */}
            <g transform="translate(8 -2) rotate(90 -49 -79)">
              <ellipse className="ear" fill={earColor} cx="-58" cy="-85" rx="32" ry="17" />
            </g>
            {/* tromba */}
            <path
              className="trunk"
              d="M-84 -58 q-16 12 -10 30 q4 14 18 12"
              stroke={tone}
              strokeWidth="12"
              strokeLinecap="round"
              fill="none"
            />
          </g>
          {/* olho */}
          <circle cx="-66" cy="-70" r="3.5" fill="var(--background)" />
        </g>
      )}
    </svg>
  );
}
