import Link from "next/link";
import CurrentJob from "~/pages/sections/currentjob";
import ProjectShowcase from "~/pages/sections/projectshowcase";
import Page from "./components/Page";
// Add the images from screenshots


export default function Home() {
  return (
    <Page>
      <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mt-14 text-black text-4xl font-bold sm:text-5xl">
            Hello
          </h1>
          
          <h2 className="mt-8 text-2xl font-semibold text-gray-900 sm:text-3xl">
            Welcome to my portfolio!
          </h2>
          
          <div className="mt-8 space-y-4 text-lg text-gray-600">
            <p>My name is Luke Jodice.</p>
            <p>Thank you for visiting my Portfolio!</p>
            <p className="mx-auto max-w-2xl">
              Please feel free to checkout the different pages on this site to get a better 
              understanding of who I am as a Programmer and Overall Tech-head
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
              <svg 
                className="ml-2 h-5 w-5 transform text-gray-400 transition-transform group-hover:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>

            <div className="mt-8 mx-auto container px-4 sm:px-6 lg:px-8">
            <p className="mb-2 text-lg text-left text-gray-600 font-bold">
               Some Notable Projects:
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
              <svg 
                className="ml-2 h-5 w-5 transform text-gray-400 transition-transform group-hover:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>

            <div className="mt-8 rounded-lg p-6 shadow-sm text-left">
              <p className="mb-6 text-lg text-left text-gray-600 font-bold">
                My current position:
              </p>
              <CurrentJob />
            </div>
          </section>
        </div>
      </div>
    </Page>
  );
}
