import EmploymentCard from "./EmploymentCard";
import { getExperience } from "~/server/data/experience";

export default function CurrentJob() {
  const jobs = getExperience();
  const recentJob = jobs[0];

  if (!recentJob) return null;

  return (
    <EmploymentCard
      title={recentJob.position}
      company={recentJob.company}
      description={recentJob.job_responsibilities}
      keyparts={recentJob.key_parts_of_job}
      timeframe={recentJob.date}
    />
  );
}
