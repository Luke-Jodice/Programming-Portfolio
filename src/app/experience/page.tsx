import type { Metadata } from "next";

import EmploymentCard from "~/components/EmploymentCard";
import SectionHeading from "~/components/SectionHeading";
import { getExperience } from "~/server/data/experience";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Luke Jodice's professional experience and career history in software engineering and technical support.",
};

export default function ExperiencePage() {
  const jobs = getExperience();

  return (
    <div className="mx-auto flex max-w-[1200px] flex-col gap-10 px-4 py-20 sm:px-8">
      <header className="flex flex-col gap-5">
        <SectionHeading index="02" title="Experience" as="h1" />
        <p className="max-w-2xl text-lg leading-relaxed text-body">
          My path so far, from support to escalations to customer experience
          engineering, and what I built at each step.
        </p>
      </header>

      <ol className="flex flex-col rounded-2xl border border-line bg-surface px-6 sm:px-8 [&>li:first-child]:border-t-0 [&>li:last-child]:border-b-0">
        {jobs.map((job) => (
          <EmploymentCard
            key={`${job.company}-${job.date}`}
            title={job.position}
            company={job.company}
            description={job.job_responsibilities}
            keyparts={job.key_parts_of_job}
            timeframe={job.date}
          />
        ))}
      </ol>
    </div>
  );
}
