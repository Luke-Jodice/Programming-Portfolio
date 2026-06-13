interface ProgramCardProps {
  title: string;
  description: string;
  repoLink: string;
  technology?: string;
  lastUpdated?: string;
}

export default function ProgramCard({
  title,
  description,
  repoLink,
  technology,
  lastUpdated,
}: ProgramCardProps) {
  const formattedDate = lastUpdated
    ? new Date(lastUpdated).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : null;

  return (
    <article className="group flex h-full flex-col rounded-xl bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
      <a
        href={repoLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-full flex-col gap-3"
      >
        <h2 className="text-xl font-bold text-gray-900 transition-colors group-hover:text-primary">
          {title}
        </h2>
        {technology ? (
          <span className="inline-flex w-fit items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            {technology}
          </span>
        ) : null}
        {description ? (
          <p className="flex-1 text-sm leading-relaxed text-gray-600">
            {description}
          </p>
        ) : (
          <p className="flex-1 text-sm italic text-gray-400">
            No description provided
          </p>
        )}
        {formattedDate ? (
          <p className="text-xs text-gray-400">Updated {formattedDate}</p>
        ) : null}
      </a>
    </article>
  );
}
