interface ArticleCardProps {
  articleUrl: string;
  title: string;
  subtitle: string;
  datePub: string;
}

export default function ArticleCard({
  articleUrl,
  title,
  subtitle,
  datePub,
}: ArticleCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-xl bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
      <a
        href={articleUrl}
        className="block"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold tracking-tight text-gray-900 transition-colors duration-200 group-hover:text-primary">
            {title}
          </h3>
          {subtitle ? (
            <p className="text-base leading-relaxed text-gray-600 group-hover:text-gray-500">
              {subtitle}
            </p>
          ) : null}
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <svg
              aria-hidden
              className="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <time dateTime={datePub} className="font-medium">
              {datePub}
            </time>
          </div>
        </div>
      </a>
    </article>
  );
}
