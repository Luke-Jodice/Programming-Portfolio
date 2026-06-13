import type { Metadata } from "next";

import ArticleCard from "~/components/ArticleCard";
import { getArticles } from "~/server/data/articles";

export const metadata: Metadata = {
  title: "Articles",
  description:
    "Articles published by Luke Jodice on Medium — reflections on software development and life as a programmer.",
};

export const revalidate = 3600;

export default async function ArticlesPage() {
  const articles = await getArticles();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100">
      <header className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8">
        <div aria-hidden className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
          <div className="absolute right-1/2 top-0 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute left-1/2 top-0 h-[300px] w-[300px] -translate-y-1/3 rounded-full bg-primary/5 blur-3xl" />
        </div>

        <div className="mx-auto max-w-3xl text-center">
          <h1 className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl">
            Published Articles
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
            Articles I've written and published — they document my development
            professionally and personally since graduating from Endicott College
            in 2023.
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        {articles.length === 0 ? (
          <p className="text-center text-gray-500">
            No articles available right now.
          </p>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <ArticleCard
                key={article.link}
                articleUrl={article.link}
                title={article.title}
                subtitle={article.subtitle}
                datePub={article.published_date}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
