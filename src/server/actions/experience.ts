"use server";

import { unstable_cache } from "next/cache";
import resumeData from "~/pages/updated_resume.json";

export interface JobExperience {
  position: string;
  company: string;
  date: string;
  key_parts_of_job: string[];
  job_responsibilities: string[];
}

export const getExperience = unstable_cache(
  async (): Promise<JobExperience[]> => {
    // Currently reading from JSON, but structured to easily swap for Prisma:
    // return db.experience.findMany({ orderBy: { order: 'asc' } });
    return (resumeData as { experience: JobExperience[] }).experience;
  },
  ["experience-data"],
  { revalidate: 3600, tags: ["experience"] }
);
