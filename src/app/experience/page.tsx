import type { Metadata } from "next";

import EmploymentCard from "~/components/EmploymentCard";
import { getExperience } from "~/server/data/experience";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Luke Jodice's professional experience and career history in software engineering and technical support.",
};

export default function ExperiencePage() {
  const jobs = getExperience();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <header className="mb-12 text-center">
          <h1 className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl">
            Professional Experience
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            My journey and professional growth through various roles.
          </p>
        </header>

        <div className="space-y-8">
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
        </div>
      </div>
    </div>
  );
}
