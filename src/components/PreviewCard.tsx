interface PreviewCardProps {
  title: string;
  description: string;
  repoLink?: string;
  liveLink?: string;
  pageLink?: string;
  technologies: readonly string[];
}

export default function PreviewCard({
  title,
  description,
  technologies,
  repoLink,
  liveLink,
  pageLink,
}: PreviewCardProps) {
  return (
    <article className="flex h-full flex-col gap-4 rounded-xl bg-white p-6 text-left text-black shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg">
      <h3 className="text-xl font-bold">{title}</h3>
      <ul className="flex flex-wrap gap-2 text-xs font-medium text-gray-600">
        {technologies.map((tech) => (
          <li
            key={tech}
            className="rounded-full bg-primary/10 px-3 py-1 text-primary"
          >
            {tech}
          </li>
        ))}
      </ul>
      <p className="flex-1 text-sm leading-relaxed text-gray-600">
        {description}
      </p>
      <div className="flex flex-wrap gap-3 text-sm font-semibold">
        {liveLink ? (
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Live demo →
          </a>
        ) : null}
        {repoLink ? (
          <a
            href={repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:underline"
          >
            GitHub →
          </a>
        ) : null}
        {pageLink ? (
          <a
            href={pageLink}
            className="text-gray-700 hover:underline"
          >
            Learn more →
          </a>
        ) : null}
      </div>
    </article>
  );
}
