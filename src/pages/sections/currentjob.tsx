import { useEffect, useState } from "react";
import EmploymentCard from "../components/Employment-Card";
import { getExperience, type JobExperience } from "~/server/actions/experience";

export default function CurrentJob() {
    const [recentJob, setRecentJob] = useState<JobExperience | null>(null);

    useEffect(() => {
        void getExperience().then(jobs => {
            if (jobs.length > 0) setRecentJob(jobs[0]!);
        });
    }, []);

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
