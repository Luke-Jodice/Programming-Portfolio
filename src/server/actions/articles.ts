"use server";

import { unstable_cache } from "next/cache";
import articlelist from "~/pages/mediumart.json";

export interface ArticleData {
  title: string;
  subtitle: string;
  link: string;
  published_date: string;
}

export const getArticles = unstable_cache(
  () => {
    return Promise.resolve(articlelist as ArticleData[]);
  },
  ["articles-data"],
  { revalidate: 3600, tags: ["articles"] }
);
