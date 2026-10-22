import type { Metadata } from "next";

import ArticleCard from "~/components/ArticleCard";
import FeaturedArticle from "~/components/FeaturedArticle";
import SectionHeading from "~/components/SectionHeading";
import { getArticles } from "~/server/data/articles";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Articles published by Luke Jodice on Medium — reflections on software development and life as a programmer.",
};

export const revalidate = 3600;

export default async function ArticlesPage() {
  const articles = await getArticles();
  const [latest, ...rest] = articles;

  return (
    <div className="mx-auto flex max-w-[1200px] flex-col gap-10 px-4 py-20 sm:px-8">
      <header className="flex flex-col gap-5">
        <SectionHeading
          index="03"
          title="Writing"
          as="h1"
          action={
            <a
              href="https://medium.com/@jodiceluke"
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 text-[15px] font-semibold hover:text-accent"
            >
              Follow on Medium ↗
            </a>
          }
        />
        <p className="max-w-2xl text-lg leading-relaxed text-body">
          Articles I’ve written and published. They document my development,
          professionally and personally, since graduating from Endicott College
          in 2023.
        </p>
      </header>

      {latest ? (
        <>
          <FeaturedArticle
            articleUrl={latest.link}
            title={latest.title}
            subtitle={latest.subtitle}
            datePub={latest.published_date}
          />
          <ul className="flex flex-col">
            {rest.map((article) => (
              <ArticleCard
                key={article.link}
                articleUrl={article.link}
                title={article.title}
                subtitle={article.subtitle}
                datePub={article.published_date}
              />
            ))}
          </ul>
        </>
      ) : (
        <p className="text-muted">No articles available right now.</p>
      )}
    </div>
  );
}
