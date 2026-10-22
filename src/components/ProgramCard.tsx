
interface ProgramCardProps {
  title: string;
  description: string;
  repoLink: string;
  technology?: string;
}

export default function ProgramCard({
  title,
  description,
  repoLink,
  technology,
}: ProgramCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-line bg-surface transition-shadow hover:shadow-md">
      <a
        href={repoLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-full flex-col gap-3 p-6"
      >
        {technology ? (
          <span className="font-mono text-xs tracking-wide text-muted uppercase">
            {technology}
          </span>
        ) : null}
        <h2 className="font-mono text-xl font-medium break-words text-ink transition-colors group-hover:text-accent">
          {title}
        </h2>
        {description ? (
          <p className="flex-1 text-[15px] leading-relaxed text-body">
            {description}
          </p>
        ) : (
          <p className="flex-1 text-[15px] text-muted italic">
            No description provided
          </p>
        )}
        <span className="pt-2 text-[15px] font-semibold group-hover:text-accent">
          Code ↗
        </span>
      </a>
    </article>
  );
}
