interface ArticleCardProps {
  articleUrl: string;
  title: string;
  subtitle: string;
  datePub: string;
}

/** One article as a list row. Render inside a <ul>. */
export default function ArticleCard({
  articleUrl,
  title,
  subtitle,
  datePub,
}: ArticleCardProps) {
  return (
    <li className="border-t border-line last:border-b">
      <a
        href={articleUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex flex-wrap items-baseline gap-x-8 gap-y-2 py-6"
      >
        <time
          dateTime={datePub}
          className="basis-40 font-mono text-[13px] text-muted uppercase"
        >
          {datePub}
        </time>
        <span className="flex min-w-0 flex-[999_1_420px] flex-col gap-1.5">
          <span className="text-[22px] font-bold tracking-[-0.015em] transition-colors group-hover:text-accent">
            {title}
          </span>
          {subtitle ? (
            <span className="text-base text-body">{subtitle}</span>
          ) : null}
        </span>
        <span
          aria-hidden
          className="font-mono text-sm text-muted transition-transform group-hover:translate-x-1 group-hover:text-accent"
        >
          ↗
        </span>
      </a>
    </li>
  );
}
