interface FeaturedArticleProps {
  articleUrl: string;
  title: string;
  subtitle: string;
  datePub: string;
}

/** The newest article, shown large at the top of the writing list. */
export default function FeaturedArticle({
  articleUrl,
  title,
  subtitle,
  datePub,
}: FeaturedArticleProps) {
  return (
    <a
      href={articleUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-wrap items-stretch gap-8 rounded-2xl border border-line bg-surface p-6 transition-shadow hover:shadow-lg sm:p-8"
    >
      <div
        aria-hidden
        className="flex min-h-56 flex-[1_1_300px] flex-col justify-between rounded-xl bg-night p-6 font-mono text-[13px] text-night-muted"
      >
        <span>medium.com/@jodiceluke</span>
        <svg
          width="120"
          height="80"
          viewBox="0 0 120 80"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-accent-soft"
        >
          <path
            d="M8 70c18-2 26-30 44-30s20 22 36 18 18-30 28-48"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path d="M8 76h104" stroke="#3A3E44" strokeWidth="1.5" />
        </svg>
      </div>
      <div className="flex min-w-0 flex-[999_1_420px] flex-col justify-center gap-4">
        <p className="font-mono text-xs tracking-[0.04em] text-muted uppercase">
          Latest · <time dateTime={datePub}>{datePub}</time>
        </p>
        <h3 className="text-[clamp(26px,3vw,34px)] leading-[1.1] font-bold tracking-[-0.025em]">
          {title}
        </h3>
        {subtitle ? (
          <p className="text-[17px] leading-relaxed text-body">{subtitle}</p>
        ) : null}
        <span className="text-[15px] font-semibold text-accent">
          Read on Medium ↗
        </span>
      </div>
    </a>
  );
}
