"use server";

import resumeData from "~/pages/updated_resume.json";

export interface JobExperience {
  position: string;
  company: string;
  date: string;
  key_parts_of_job: string[];
  job_responsibilities: string[];
}

export const getExperience = async () => {
    // Currently reading from JSON, but structured to easily swap for Prisma:
    // return db.experience.findMany({ orderBy: { order: 'asc' } });
    return Promise.resolve((resumeData as { experience: JobExperience[] }).experience);
};
