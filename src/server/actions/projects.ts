"use server";

import { unstable_cache } from "next/cache";
import { type GithubRepo, type ProgramCardData } from "~/lib/types";

export const getGithubRepos = unstable_cache(
  async (): Promise<ProgramCardData[]> => {
    try {
      const response = await fetch(
        "https://api.github.com/users/luke-jodice/repos?sort=updated&per_page=20",
        {
          headers: {
            "Accept": "application/vnd.github.v3+json",
            "User-Agent": "Luke-Jodice-Portfolio"
          },
          next: { revalidate: 3600 } // Revalidate every hour
        }
      );

      if (!response.ok) {
        throw new Error(`GitHub API responded with ${response.status}`);
      }

      const data = (await response.json()) as GithubRepo[];
      
      return data
        .map((repo) => ({
          title: repo.name,
          description: repo.description ?? "",
          repoLink: repo.html_url,
          technology: repo.language ?? undefined,
          lastUpdated: repo.pushed_at,
        }))
        .sort(
          (a, b) =>
            new Date(b.lastUpdated ?? 0).getTime() -
            new Date(a.lastUpdated ?? 0).getTime()
        );
    } catch (error) {
      console.error("Error fetching Github repos:", error);
      return [];
    }
  },
  ["github-repos"],
  { revalidate: 3600, tags: ["projects"] }
);
