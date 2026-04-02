import { useEffect, useState } from "react";
import Page from "~/pages/components/Page";
import Article from "./components/article";
import { getArticles, type ArticleData } from "~/server/actions/articles";

export default function Articles() {
  const [articles, setArticles] = useState<ArticleData[]>([]);

  useEffect(() => {
    void getArticles().then(setArticles);
  }, []);

  return (
    <Page>
      <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100">
        <header className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8">
          {/* Decorative background elements */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
            <div className="absolute right-1/2 top-0 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
            <div className="absolute left-1/2 top-0 h-[300px] w-[300px] -translate-y-1/3 rounded-full bg-primary/5 blur-3xl" />
          </div>

          <div className="mx-auto max-w-3xl text-center">
            <h1 className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl">
              Published Articles
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
              These are all articles that I have written and published that talk about my development professionally and
              as a way to document my thoughts and opinions as I have gone out into the Real World during my time 
              following graduating from Endicott College in 2023.
            </p>
          </div>
        </header>

        <main className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((art, index) => (
              <Article
                key={index}
                article_url={art.link}
                title={art.title}
                subtitle={art.subtitle}
                datePub={art.published_date}
              />
            ))}
          </div>
        </main>
      </div>
    </Page>
  );
}
