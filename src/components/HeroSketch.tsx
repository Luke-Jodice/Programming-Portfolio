import type { CSSProperties } from "react";

/**
 * Wireframe browser window that draws itself on, then a cursor glides in
 * and "selects" a block. Pure SVG + CSS (see .lw-* in globals.css), so it
 * stays a server component and respects prefers-reduced-motion.
 */
const STROKE = "#B4B8B0";
const BAR = "#C6C9C1";
const DIM = "#AEB2AA";

function d(delay: number, duration?: number): CSSProperties {
  return {
    animationDelay: `${delay}s`,
    ...(duration ? { animationDuration: `${duration}s` } : {}),
  };
}

export default function HeroSketch({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      width="400"
      height="270"
      viewBox="0 0 400 270"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`overflow-visible text-accent ${className}`}
    >
      <path
        className="lw-draw"
        pathLength={1}
        d="M20 22H380M20 15v14M380 15v14"
        stroke={DIM}
        strokeWidth="1"
        style={d(1.9)}
      />
      <text
        className="lw-fade"
        x="200"
        y="12"
        textAnchor="middle"
        fontFamily="var(--font-mono)"
        fontSize="11"
        fill="#9EA39B"
        style={d(2.3)}
      >
        1200 px
      </text>
      <rect
        className="lw-draw"
        pathLength={1}
        x="20"
        y="40"
        width="360"
        height="215"
        rx="8"
        stroke={STROKE}
        strokeWidth="1.25"
        style={d(0.2, 1.3)}
      />
      <path
        className="lw-draw"
        pathLength={1}
        d="M20 64h360"
        stroke={STROKE}
        strokeWidth="1.25"
        style={d(0.8)}
      />
      <circle
        className="lw-draw"
        pathLength={1}
        cx="36"
        cy="52"
        r="4"
        stroke={STROKE}
        strokeWidth="1.25"
        style={d(0.9, 0.4)}
      />
      <circle
        className="lw-draw"
        pathLength={1}
        cx="50"
        cy="52"
        r="4"
        stroke={STROKE}
        strokeWidth="1.25"
        style={d(1, 0.4)}
      />
      <rect
        className="lw-draw"
        pathLength={1}
        x="34"
        y="78"
        width="82"
        height="162"
        rx="5"
        stroke={STROKE}
        strokeWidth="1.25"
        style={d(1)}
      />
      <path
        className="lw-draw"
        pathLength={1}
        d="M46 96h52M46 112h40M46 128h46"
        stroke={BAR}
        strokeWidth="5"
        style={d(1.6, 0.7)}
      />
      <rect
        className="lw-draw"
        pathLength={1}
        x="130"
        y="78"
        width="236"
        height="70"
        rx="5"
        stroke={STROKE}
        strokeWidth="1.25"
        style={d(1.15)}
      />
      <path
        className="lw-draw"
        pathLength={1}
        d="M146 102h110M146 120h70"
        stroke={BAR}
        strokeWidth="5"
        style={d(1.75, 0.6)}
      />
      <rect
        className="lw-draw"
        pathLength={1}
        x="130"
        y="162"
        width="112"
        height="78"
        rx="5"
        stroke={STROKE}
        strokeWidth="1.25"
        style={d(1.3)}
      />
      <rect
        className="lw-draw"
        pathLength={1}
        x="254"
        y="162"
        width="112"
        height="78"
        rx="5"
        stroke={STROKE}
        strokeWidth="1.25"
        style={d(1.45)}
      />

      {/* Clicked state */}
      <rect
        className="lw-fade"
        x="130"
        y="162"
        width="112"
        height="78"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.75"
        style={d(3.5)}
      />
      <g className="lw-fade" style={d(3.55)}>
        <rect
          x="124"
          y="156"
          width="124"
          height="90"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="4 4"
          opacity="0.6"
        />
        {[
          [120, 152],
          [244, 152],
          [120, 242],
          [244, 242],
        ].map(([x, y]) => (
          <rect
            key={`${x}-${y}`}
            x={x}
            y={y}
            width="8"
            height="8"
            fill="#F1F2EE"
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.8"
          />
        ))}
      </g>
      <circle
        className="lw-ripple"
        cx="226"
        cy="200"
        r="14"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <g className="lw-cursor">
        <path
          className="lw-click"
          d="M226 200l11 26 4-10 10-4z"
          fill="#F1F2EE"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </g>
    </svg>
  );
}
