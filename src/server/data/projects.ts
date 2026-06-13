import "server-only";

import type { GithubRepo, ProgramCardData } from "~/lib/types";

const GITHUB_USER = "luke-jodice";
const REVALIDATE_SECONDS = 60 * 60;

export async function getGithubRepos(): Promise<ProgramCardData[]> {
  try {
    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=20`,
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
          "User-Agent": "Luke-Jodice-Portfolio",
        },
        next: { revalidate: REVALIDATE_SECONDS },
      },
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
          new Date(a.lastUpdated ?? 0).getTime(),
      );
  } catch (error) {
    console.error("Error fetching Github repos:", error);
    return [];
  }
}
