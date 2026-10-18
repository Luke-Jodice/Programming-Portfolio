/** Line-art thumbnails for featured projects. */

export type ProjectArtKind = "transit" | "route";

function Transit() {
  // A subway-map style line with stations, one highlighted
  return (
    <div className="flex h-60 items-center justify-center bg-[#e6e8e2]">
      <svg
        aria-hidden
        width="320"
        height="170"
        viewBox="0 0 320 170"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-accent"
      >
        <path
          d="M20 130h70l40-40h70l40-40h60"
          stroke="#9BA0A5"
          strokeWidth="6"
        />
        <path
          d="M60 30v40l30 30h120l30 30h60"
          stroke="currentColor"
          strokeWidth="6"
        />
        {[
          [20, 130],
          [90, 130],
          [200, 90],
          [300, 50],
        ].map(([cx, cy]) => (
          <circle
            key={`a${cx}`}
            cx={cx}
            cy={cy}
            r="7"
            fill="#fff"
            stroke="#9BA0A5"
            strokeWidth="3"
          />
        ))}
        {[
          [60, 30],
          [90, 100],
          [210, 100],
          [300, 130],
        ].map(([cx, cy]) => (
          <circle
            key={`b${cx}`}
            cx={cx}
            cy={cy}
            r="7"
            fill="#fff"
            stroke="currentColor"
            strokeWidth="3"
          />
        ))}
        <circle
          cx="150"
          cy="100"
          r="11"
          fill="#fff"
          stroke="#15171A"
          strokeWidth="3"
        />
        <rect
          x="118"
          y="136"
          width="64"
          height="22"
          rx="6"
          fill="#fff"
          stroke="#D0D3CC"
        />
        <path d="M128 147h44" stroke="#C6C9C1" strokeWidth="5" />
      </svg>
    </div>
  );
}

function Route() {
  // A drive route on a map with an equalizer: trip planning + music
  return (
    <div className="flex h-60 items-center justify-center bg-night">
      <svg
        aria-hidden
        width="320"
        height="180"
        viewBox="0 0 320 180"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-accent-soft"
      >
        <rect
          x="10"
          y="10"
          width="300"
          height="160"
          rx="10"
          stroke="#F1F2EE"
          strokeWidth="1.5"
        />
        <path
          d="M34 140c30-10 30-60 70-60s40 50 80 40 40-70 100-80"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeDasharray="1 7"
        />
        <circle cx="34" cy="140" r="6" stroke="#F1F2EE" strokeWidth="1.5" />
        <path
          d="M284 40c0 10-12 22-12 22s-12-12-12-22a12 12 0 0 1 24 0z"
          stroke="#F1F2EE"
          strokeWidth="1.5"
        />
        <circle cx="272" cy="40" r="4" stroke="#F1F2EE" strokeWidth="1.5" />
        <g stroke="currentColor" strokeWidth="5">
          <path d="M150 150v-14" />
          <path d="M162 150v-26" />
          <path d="M174 150v-18" />
          <path d="M186 150v-32" />
          <path d="M198 150v-10" />
        </g>
      </svg>
    </div>
  );
}

export default function ProjectArt({ kind }: { kind: ProjectArtKind }) {
  return kind === "transit" ? <Transit /> : <Route />;
}
