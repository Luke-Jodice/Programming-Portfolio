import { useEffect, useState } from "react";
import Page from "~/pages/components/Page";
import ProgramCards from "~/pages/components/ProgramCard";

interface ProgramCardData {
  className?: string;
  children?: React.ReactNode;
  title: string;
  description: string;
  repoLink: string;
  liveLink?: string;
  pageLink?: string;
  technology?: string;
  screenshotpath?: string;
  lastUpdated?: string;
  id?: string;
}
interface GithubRepo {
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  pushed_at: string;
}

// var repos: ProgramCarddata[] = []

export default function ProjectsMain() {
  const [repos, setData] = useState<ProgramCardData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://api.github.com/users/luke-jodice/repos?sort=updated&per_page=20"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json() as Promise<GithubRepo[]>;
      })
      .then((data) => {
        const mappedRepos : ProgramCardData[] = data
          .map((repo) => ({
            title: repo.name,
            description: repo.description ?? "",
            repoLink: repo.html_url,
            technology: repo.language ?? undefined,
            lastUpdated: repo.pushed_at,
          }))
          .sort(
            (a,b) =>
              new Date(b.lastUpdated ?? 0).getTime() -
              new Date(a.lastUpdated ?? 0).getTime()
          );
        setData(mappedRepos);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Page>
      <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <header className="text-center">
            <h1 className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
              My Projects
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Here are some of the projects that I have been working on
            </p>
            <p className="mx-auto mt-2 max-w-3xl text-sm text-gray-500">
              At this time, I am working on getting the descriptions added.
              Please feel free to click on the repository names and explore all
              of these projects found on GitHub!
            </p>
          </header>

          <main className="mt-20">
            {loading ? (
              <div className="flex min-h-[200px] items-center justify-center rounded-lg bg-white p-8 shadow-sm">
                <div className="flex items-center space-x-3 text-gray-600">
                  <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  <span>
                    One moment while retrieving projects from Github...
                  </span>
                </div>
              </div>
            ) : (
              <div className="mt-4 grid gap-8 gap-y-20 sm:grid-cols-2 lg:grid-cols-3">
                {repos.map((repo, index) => (
                  <ProgramCards
                    key={index}
                    title={repo.title}
                    description={repo.description}
                    repoLink={repo.repoLink}
                    technology={repo.technology}
                  />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </Page>
  );
}
