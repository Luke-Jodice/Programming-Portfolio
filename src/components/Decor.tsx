/** Static blueprint drawings that sit faintly behind sections. */

const STROKE = "#B4B8B0";
const DIM = "#AEB2AA";
const LABEL = "#9EA39B";

export function Crosshair({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
      className={`pointer-events-none ${className}`}
    >
      <circle cx="22" cy="22" r="10" stroke={DIM} strokeWidth="1" />
      <path d="M22 2v40M2 22h40" stroke={DIM} strokeWidth="1" />
    </svg>
  );
}

export function PhoneOutline({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      width="220"
      height="420"
      viewBox="0 0 220 420"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`pointer-events-none ${className}`}
    >
      <rect
        x="20"
        y="10"
        width="180"
        height="380"
        rx="28"
        stroke={STROKE}
        strokeWidth="1.25"
      />
      <rect
        x="80"
        y="22"
        width="60"
        height="10"
        rx="5"
        stroke={STROKE}
        strokeWidth="1.25"
      />
      <rect
        x="38"
        y="52"
        width="144"
        height="90"
        rx="8"
        stroke={STROKE}
        strokeWidth="1.25"
      />
      <path
        d="M38 162h120M38 178h90M38 194h104"
        stroke="#C6C9C1"
        strokeWidth="5"
      />
      <rect
        x="38"
        y="220"
        width="68"
        height="68"
        rx="8"
        stroke={STROKE}
        strokeWidth="1.25"
      />
      <rect
        x="114"
        y="220"
        width="68"
        height="68"
        rx="8"
        stroke={STROKE}
        strokeWidth="1.25"
      />
      <rect
        x="38"
        y="340"
        width="144"
        height="32"
        rx="16"
        stroke={STROKE}
        strokeWidth="1.25"
      />
      <path d="M210 10v380M204 10h12M204 390h12" stroke={DIM} strokeWidth="1" />
      <text
        x="214"
        y="404"
        textAnchor="end"
        fontFamily="var(--font-mono)"
        fontSize="11"
        fill={LABEL}
      >
        390 × 844
      </text>
    </svg>
  );
}

export function Compass({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      width="300"
      height="300"
      viewBox="0 0 300 300"
      fill="none"
      strokeLinecap="round"
      className={`pointer-events-none ${className}`}
    >
      <circle cx="150" cy="150" r="120" stroke={STROKE} strokeWidth="1.25" />
      <circle
        cx="150"
        cy="150"
        r="72"
        stroke={STROKE}
        strokeWidth="1.25"
        strokeDasharray="3 6"
      />
      <path d="M150 20v260M20 150h260" stroke="#C6C9C1" strokeWidth="1" />
      <path d="M150 150L235 65" stroke={DIM} strokeWidth="1" />
      <text
        x="200"
        y="98"
        fontFamily="var(--font-mono)"
        fontSize="11"
        fill={LABEL}
      >
        r = 120
      </text>
    </svg>
  );
}
