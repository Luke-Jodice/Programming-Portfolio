import ProjectArt, { type ProjectArtKind } from "./ProjectArt";
import Tag from "./Tag";

interface PreviewCardProps {
  title: string;
  description: string;
  repoLink?: string;
  liveLink?: string;
  pageLink?: string;
  technologies: readonly string[];
  art?: ProjectArtKind;
}

export default function PreviewCard({
  title,
  description,
  technologies,
  repoLink,
  liveLink,
  pageLink,
  art,
}: PreviewCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface text-left transition-shadow hover:shadow-lg">
      {art ? <ProjectArt kind={art} /> : null}
      <div className="flex flex-1 flex-col gap-3.5 p-7">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="text-[26px] font-bold tracking-[-0.02em]">{title}</h3>
          <span className="font-mono text-xs text-muted">FEATURED</span>
        </div>
        <p className="text-base leading-relaxed text-body">{description}</p>
        <ul className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <li key={tech}>
              <Tag>{tech}</Tag>
            </li>
          ))}
        </ul>
        <div className="mt-auto flex flex-wrap gap-5 pt-2 text-[15px] font-semibold">
          {repoLink ? (
            <a
              href={repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 hover:text-accent"
            >
              Code ↗
            </a>
          ) : null}
          {liveLink ? (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 text-accent hover:underline"
            >
              Live demo ↗
            </a>
          ) : null}
          {pageLink ? (
            <a href={pageLink} className="py-2.5 hover:text-accent">
              Learn more →
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
