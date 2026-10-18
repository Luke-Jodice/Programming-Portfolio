export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="relative z-10 overflow-clip border-t border-line"
    >
      <svg
        aria-hidden
        width="200"
        height="200"
        viewBox="0 0 200 200"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="pointer-events-none absolute right-[5%] bottom-24 hidden text-accent lg:block"
      >
        <circle
          cx="80"
          cy="80"
          r="22"
          stroke="currentColor"
          strokeWidth="1.25"
          opacity="0.55"
        />
        <circle
          cx="80"
          cy="80"
          r="44"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.35"
        />
        <circle
          cx="80"
          cy="80"
          r="70"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.2"
        />
        <path d="M80 80l17 40 6-16 16-6z" stroke="#9EA39B" strokeWidth="1.5" />
      </svg>

      <div className="relative mx-auto flex max-w-[1200px] flex-col gap-12 px-4 pt-24 pb-12 sm:px-8">
        <div className="flex flex-col gap-5">
          <p className="font-mono text-[13px] tracking-[0.04em] text-muted">
            CONTACT
          </p>
          <h2 className="max-w-4xl text-[clamp(40px,5.6vw,72px)] leading-[1.02] font-extrabold tracking-[-0.035em]">
            Have a project, a question, or a good bug story?
          </h2>
          <a
            href="mailto:jodiceluke@gmail.com"
            className="self-start py-2 text-[clamp(22px,2.6vw,32px)] font-semibold text-accent hover:underline"
          >
            jodiceluke@gmail.com →
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6 text-[15px]">
          <span className="text-muted">© {year} Luke Jodice</span>
          <div className="flex flex-wrap gap-6 font-semibold">
            <a
              href="https://github.com/luke-jodice"
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 hover:text-accent"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/luke-jodice/"
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 hover:text-accent"
            >
              LinkedIn
            </a>
            <a
              href="https://medium.com/@jodiceluke"
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 hover:text-accent"
            >
              Medium
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
