import type { Metadata } from "next";

import ProgramCard from "~/components/ProgramCard";
import { getGithubRepos } from "~/server/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "An auto-updating list of Luke Jodice's public GitHub repositories.",
};

export const revalidate = 3600;

export default async function ProjectsPage() {
  const repos = await getGithubRepos();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="text-center">
          <h1 className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
            My Projects
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            A selection of projects I've been working on.
          </p>
          <p className="mx-auto mt-2 max-w-3xl text-sm text-gray-500">
            Click any repository name to explore the source on GitHub.
          </p>
        </header>

        <section className="mt-16">
          {repos.length === 0 ? (
            <div className="rounded-lg bg-white p-8 text-center text-gray-600 shadow-sm">
              Couldn't reach GitHub right now. Please refresh in a moment.
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {repos.map((repo) => (
                <ProgramCard
                  key={repo.repoLink}
                  title={repo.title}
                  description={repo.description}
                  repoLink={repo.repoLink}
                  technology={repo.technology}
                  lastUpdated={repo.lastUpdated}
                />
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
