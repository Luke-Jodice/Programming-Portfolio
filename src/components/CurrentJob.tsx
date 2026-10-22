import EmploymentCard from "./EmploymentCard";
import { getExperience } from "~/server/data/experience";

/** The most recent jobs, as timeline rows on a dark background. */
export default function CurrentJob({ count = 2 }: { count?: number }) {
  const jobs = getExperience().slice(0, count);

  if (jobs.length === 0) return null;

  return (
    <ol className="flex flex-col">
      {jobs.map((job) => (
        <EmploymentCard
          key={`${job.company}-${job.date}`}
          title={job.position}
          company={job.company}
          description={job.job_responsibilities}
          keyparts={job.key_parts_of_job}
          timeframe={job.date}
          tone="dark"
          maxBullets={3}
        />
      ))}
    </ol>
  );
}
