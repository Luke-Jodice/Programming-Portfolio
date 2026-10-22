import Link from "next/link";

import ArticleCard from "~/components/ArticleCard";
import CurrentJob from "~/components/CurrentJob";
import { Compass, Crosshair, PhoneOutline } from "~/components/Decor";
import FeaturedArticle from "~/components/FeaturedArticle";
import HeroSketch from "~/components/HeroSketch";
import ProjectShowcase from "~/components/ProjectShowcase";
import SectionHeading from "~/components/SectionHeading";
import Tag from "~/components/Tag";
import { getArticles } from "~/server/data/articles";

export const revalidate = 3600;

const now = [
  "Customer Experience Engineer on Pave at Quickbase",
  "Automating code-page deploys with GitHub Actions",
  "Writing the Programmer’s New Year Resolution series",
];

const toolbox = [
  "JavaScript",
  "Python",
  "React",
  "Next.js",
  "Tailwind CSS",
  "CI/CD",
  "Splunk",
  "Git",
];

export default async function Home() {
  const articles = await getArticles();
  const [latest, ...rest] = articles;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-clip">
        <HeroSketch className="pointer-events-none absolute top-14 right-[3%] hidden lg:block" />
        <Crosshair className="absolute bottom-6 left-[47%] hidden lg:block" />
        <div className="relative mx-auto flex max-w-[1200px] flex-wrap items-end gap-14 px-4 pt-20 pb-20 sm:px-8 sm:pt-24">
          <div className="flex min-w-0 flex-[999_1_560px] flex-col gap-7">
            <p className="flex items-center gap-2.5 font-mono text-[13px] tracking-[0.04em] text-muted">
              <span className="h-2 w-2 rounded-full bg-accent" />
              CUSTOMER EXPERIENCE ENGINEER · PAVE (QUICKBASE)
            </p>
            <h1 className="text-[clamp(44px,6.4vw,84px)] leading-none font-extrabold tracking-[-0.035em]">
              I build the tools between a product and the people learning it.
            </h1>
            <p className="max-w-[620px] text-xl leading-relaxed text-body">
              CI/CD pipelines, internal tooling, and the demos, videos and docs
              that help customers actually get it. This is where I keep the
              projects, the jobs, and the things I’ve written along the way.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#featured"
                className="inline-flex min-h-12 items-center gap-2.5 rounded-full bg-accent px-6 text-base font-semibold text-white transition-colors hover:bg-ink"
              >
                See projects
                <svg
                  aria-hidden
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 5v14M5 12l7 7 7-7" />
                </svg>
              </a>
              <Link
                href="/articles"
                className="inline-flex min-h-12 items-center rounded-full border-[1.5px] border-ink px-6 text-base font-semibold transition-colors hover:border-accent hover:text-accent"
              >
                Read my writing
              </Link>
            </div>
          </div>
          <aside
            aria-label="Currently"
            className="flex flex-[1_1_300px] flex-col gap-4 rounded-2xl border border-line bg-surface p-6"
          >
            <p className="font-mono text-xs tracking-[0.06em] text-muted">
              NOW
            </p>
            <ul className="flex flex-col gap-3.5 text-[15px] leading-snug">
              {now.map((item) => (
                <li key={item} className="flex gap-3">
                  <span aria-hidden className="font-mono text-accent">
                    →
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      {/* Featured projects */}
      <section
        aria-labelledby="featured"
        className="relative overflow-clip border-t border-line"
      >
        <PhoneOutline className="absolute top-40 -left-10 hidden xl:block" />
        <div className="relative mx-auto flex max-w-[1200px] flex-col gap-10 px-4 py-20 sm:px-8 sm:py-24">
          <SectionHeading
            index="01"
            title="Projects"
            id="featured"
            action={
              <Link
                href="/projects"
                className="py-3 text-[15px] font-semibold hover:text-accent"
              >
                All projects →
              </Link>
            }
          />
          <ProjectShowcase />
        </div>
      </section>

      {/* Experience */}
      <section
        aria-labelledby="experience-h"
        className="blueprint-night text-ground"
      >
        <div className="mx-auto flex max-w-[1200px] flex-wrap gap-14 px-4 py-20 sm:px-8 sm:py-24">
          <div className="flex flex-[1_1_280px] flex-col gap-6">
            <SectionHeading
              index="02"
              title="Experience"
              id="experience-h"
              tone="dark"
            />
            <p className="text-base leading-relaxed text-night-muted">
              Where I’ve worked, and what I built while I was there.
            </p>
            <div className="flex flex-col gap-3 pt-2">
              <p className="font-mono text-xs tracking-[0.06em] text-night-muted">
                TOOLBOX
              </p>
              <ul className="flex flex-wrap gap-2">
                {toolbox.map((tool) => (
                  <li key={tool}>
                    <Tag tone="dark">{tool}</Tag>
                  </li>
                ))}
              </ul>
            </div>
            <Link
              href="/experience"
              className="mt-2 inline-flex min-h-12 items-center self-start rounded-full border-[1.5px] border-ground px-6 text-[15px] font-semibold transition-colors hover:bg-ground hover:text-ink"
            >
              Full work history →
            </Link>
          </div>
          <div className="min-w-0 flex-[999_1_560px]">
            <CurrentJob count={2} />
          </div>
        </div>
      </section>

      {/* Writing */}
      <section aria-labelledby="writing-h" className="relative overflow-clip">
        <Compass className="absolute -right-20 bottom-10 hidden lg:block" />
        <div className="relative mx-auto flex max-w-[1200px] flex-col gap-10 px-4 py-20 sm:px-8 sm:py-24">
          <SectionHeading
            index="03"
            title="Writing"
            id="writing-h"
            action={
              <Link
                href="/articles"
                className="py-3 text-[15px] font-semibold hover:text-accent"
              >
                All articles →
              </Link>
            }
          />
          {latest ? (
            <>
              <FeaturedArticle
                articleUrl={latest.link}
                title={latest.title}
                subtitle={latest.subtitle}
                datePub={latest.published_date}
              />
              <ul className="flex flex-col">
                {rest.slice(0, 3).map((article) => (
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
      </section>
    </>
  );
}
