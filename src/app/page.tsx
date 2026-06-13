import Link from "next/link";

import CurrentJob from "~/components/CurrentJob";
import ProjectShowcase from "~/components/ProjectShowcase";

function ChevronRight() {
  return (
    <svg
      aria-hidden
      className="ml-2 h-5 w-5 text-gray-400 transition-transform group-hover:translate-x-1"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 5l7 7-7 7"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="mt-14 text-4xl font-bold text-black sm:text-5xl">
          Hello
        </h1>

        <h2 className="mt-8 text-2xl font-semibold text-gray-900 sm:text-3xl">
          Welcome to my portfolio!
        </h2>

        <div className="mt-8 space-y-4 text-lg text-gray-600">
          <p>My name is Luke Jodice.</p>
          <p>Thank you for visiting my portfolio!</p>
          <p className="mx-auto max-w-2xl">
            Please feel free to check out the different pages on this site to
            get a better understanding of who I am as a programmer and overall
            tech-head.
          </p>
        </div>

        <section className="mt-14">
          <Link
            href="/projects"
            className="group inline-flex w-full items-center justify-between rounded-lg bg-white p-4 shadow-sm transition-all hover:shadow-md sm:w-auto"
          >
            <h2 className="text-2xl font-bold text-gray-900 group-hover:text-primary sm:text-3xl">
              Projects
            </h2>
            <ChevronRight />
          </Link>

          <div className="container mx-auto mt-8 px-4 sm:px-6 lg:px-8">
            <p className="mb-2 text-left text-lg font-bold text-gray-600">
              Some notable projects:
            </p>
            <ProjectShowcase />
          </div>
        </section>

        <section className="mt-16">
          <Link
            href="/experience"
            className="group inline-flex w-full items-center justify-between rounded-lg bg-white p-4 shadow-sm transition-all hover:shadow-md sm:w-auto"
          >
            <h2 className="text-2xl font-bold text-gray-900 group-hover:text-primary sm:text-3xl">
              Experience
            </h2>
            <ChevronRight />
          </Link>

          <div className="mt-8 rounded-lg p-6 text-left shadow-sm">
            <p className="mb-6 text-left text-lg font-bold text-gray-600">
              My current position:
            </p>
            <CurrentJob />
          </div>
        </section>
      </div>
    </div>
  );
}
