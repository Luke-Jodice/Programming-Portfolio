import EmploymentCard from "../components/Employment-Card";
import jobData from "../updated_resume.json";

interface JobExperience {
    position: string;
    company: string;
    date: string;
    key_parts_of_job: string[];
    job_responsibilities: string[];
}

interface ResumeData {
    experience: JobExperience[];
}

const job = jobData as ResumeData;
const recentJob = job.experience[0]!;

export default function CurrentJob() {
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
