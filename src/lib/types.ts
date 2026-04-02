export interface ProgramCardData {
  className?: string;
  children?: React.ReactNode;
  title: string;
  description: string;
  repoLink: string;
  liveLink?: string;
  pageLink?: string;
  technology?: string;
  screenshotpath?: string;
  lastUpdated?: string;
  id?: string;
}

export interface GithubRepo {
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  pushed_at: string;
}
