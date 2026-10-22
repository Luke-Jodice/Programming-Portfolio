/** Line-art thumbnails for featured projects. */

export type ProjectArtKind = "transit" | "route" | "timeline";

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

const WAVEFORM = [6, 12, 8, 16, 10, 4, 14, 18, 8, 12, 6, 10, 16, 8, 4, 12, 18,
  10, 6, 14, 8, 12, 16, 6, 10, 14, 8, 4, 12, 10, 16, 6, 8, 12];

function Timeline() {
  // An editor viewer above a cut video track and audio waveform, with playhead
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
        <rect
          x="110"
          y="10"
          width="100"
          height="56"
          rx="6"
          fill="#fff"
          stroke="#D0D3CC"
        />
        <path d="M152 28l16 10-16 10z" fill="currentColor" />
        {[
          [20, 90],
          [126, 70],
          [208, 92],
        ].map(([x, w]) => (
          <rect
            key={`c${x}`}
            x={x}
            y="82"
            width={w}
            height="22"
            rx="5"
            fill="#fff"
            stroke="currentColor"
            strokeWidth="3"
          />
        ))}
        <path
          d="M118 78v30"
          stroke="#9BA0A5"
          strokeWidth="2"
          strokeDasharray="2 5"
        />
        <g stroke="#9BA0A5" strokeWidth="3">
          {WAVEFORM.map((h, i) => {
            const x = 24 + i * 8;
            // Leave a gap where the clip was cut
            if (x > 108 && x < 128) return null;
            return <path key={x} d={`M${x} ${134 - h / 2}v${h}`} />;
          })}
        </g>
        <path d="M168 72v86" stroke="#15171A" strokeWidth="3" />
        <circle
          cx="168"
          cy="72"
          r="7"
          fill="#fff"
          stroke="#15171A"
          strokeWidth="3"
        />
      </svg>
    </div>
  );
}

export default function ProjectArt({ kind }: { kind: ProjectArtKind }) {
  if (kind === "transit") return <Transit />;
  if (kind === "timeline") return <Timeline />;
  return <Route />;
}
