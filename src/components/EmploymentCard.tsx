interface EmploymentCardProps {
  title: string;
  company: string;
  description: string[];
  keyparts: string[];
  timeframe?: string;
}

export default function EmploymentCard({
  title,
  company,
  description,
  keyparts,
  timeframe,
}: EmploymentCardProps) {
  return (
    <article className="rounded-xl bg-white p-6 shadow-sm transition-all hover:shadow-md">
      <div className="space-y-4">
        <header className="border-b border-gray-100 pb-4">
          <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
          <div className="mt-2 flex flex-wrap items-center gap-2 text-gray-600">
            <span className="font-medium">{company}</span>
            {timeframe ? (
              <>
                <span aria-hidden className="text-gray-300">
                  •
                </span>
                <span className="text-sm text-gray-500">{timeframe}</span>
              </>
            ) : null}
          </div>
        </header>

        {keyparts.length > 0 ? (
          <ul className="flex flex-wrap gap-2 rounded-lg bg-gray-50 px-4 py-3 text-sm text-gray-600">
            {keyparts.map((part) => (
              <li
                key={part}
                className="rounded-full bg-white px-3 py-1 shadow-sm"
              >
                {part}
              </li>
            ))}
          </ul>
        ) : null}

        <ul className="space-y-3 text-gray-600">
          {description.map((item) => (
            <li key={item} className="flex items-start">
              <svg
                aria-hidden
                className="mr-2 mt-1.5 h-4 w-4 flex-shrink-0 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
