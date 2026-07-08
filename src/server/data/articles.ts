import "server-only";

import Parser from "rss-parser";
import articlelist from "~/data/articles-static.json";

export interface ArticleData {
  title: string;
  subtitle: string;
  link: string;
  published_date: string;
}

const MEDIUM_RSS = "https://medium.com/feed/@jodiceluke";

function normalizeUrl(url: string): string {
  return url.split("?")[0] ?? url;
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });
}

function parseDate(dateStr: string): number {
  return new Date(dateStr).getTime();
}

export async function getArticles(): Promise<ArticleData[]> {
  const staticArticles = articlelist as ArticleData[];
  const staticUrlSet = new Set(staticArticles.map((a) => normalizeUrl(a.link)));

  try {
    const parser = new Parser();
    const feed = await parser.parseURL(MEDIUM_RSS);

    const rssArticles: ArticleData[] = (feed.items ?? [])
      .filter((item) => !staticUrlSet.has(normalizeUrl(item.link ?? "")))
      .map((item) => ({
        title: item.title ?? "",
        subtitle: item.contentSnippet?.split("\n")[0]?.slice(0, 150) ?? "",
        link: item.link ?? "",
        published_date: item.pubDate ? formatDate(item.pubDate) : "",
      }));

    return [...rssArticles, ...staticArticles].sort(
      (a, b) => parseDate(b.published_date) - parseDate(a.published_date),
    );
  } catch {
    return staticArticles;
  }
}
