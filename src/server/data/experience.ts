import "server-only";

import resumeData from "~/data/resume.json";

export interface JobExperience {
  position: string;
  company: string;
  date: string;
  key_parts_of_job: string[];
  job_responsibilities: string[];
}

export function getExperience(): JobExperience[] {
  return (resumeData as { experience: JobExperience[] }).experience;
}
