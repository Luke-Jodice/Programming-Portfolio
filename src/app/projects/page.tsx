import type { Metadata } from "next";

import ProgramCard from "~/components/ProgramCard";
import ProjectShowcase from "~/components/ProjectShowcase";
import SectionHeading from "~/components/SectionHeading";
import { getGithubRepos } from "~/server/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Featured projects and an auto-updating list of Luke Jodice's public GitHub repositories.",
};

export const revalidate = 3600;

export default async function ProjectsPage() {
  const repos = await getGithubRepos();

  return (
    <div className="mx-auto flex max-w-[1200px] flex-col gap-10 px-4 py-20 sm:px-8">
      <header className="flex flex-col gap-5">
        <SectionHeading index="01" title="Projects" as="h1" />
        <p className="max-w-2xl text-lg leading-relaxed text-body">
          A few projects I’m proud of, followed by everything on my GitHub, most
          recently updated first.
        </p>
      </header>

      <ProjectShowcase />

      <section aria-labelledby="repos-h" className="flex flex-col gap-6 pt-8">
        <h2
          id="repos-h"
          className="font-mono text-[13px] tracking-[0.06em] text-muted"
        >
          ALL REPOSITORIES
        </h2>
        {repos.length === 0 ? (
          <div className="rounded-2xl border border-line bg-surface p-8 text-center text-body">
            Couldn’t reach GitHub right now. Please refresh in a moment.
          </div>
        ) : (
          <div className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,260px),1fr))] gap-6">
            {repos.map((repo) => (
              <ProgramCard
                key={repo.repoLink}
                title={repo.title}
                description={repo.description}
                repoLink={repo.repoLink}
                technology={repo.technology}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
