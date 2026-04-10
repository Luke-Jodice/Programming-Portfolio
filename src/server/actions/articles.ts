"use server";

import articlelist from "~/pages/mediumart.json";

export interface ArticleData {
  title: string;
  subtitle: string;
  link: string;
  published_date: string;
}

export const getArticles = async () => {
    return Promise.resolve(articlelist as ArticleData[]);
};
