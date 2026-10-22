import PreviewCard from "./PreviewCard";

const showcase = [
  {
    title: "MBTA SDK",
    description:
      "A middleware implementation of the MBTA API to assist with writing applications interacting with data around the MBTA T system.",
    repoLink: "https://github.com/Luke-Jodice/MBTA-SDK",
    technologies: ["JavaScript", "API", "Integration"],
    art: "transit",
  },
  {
    title: "Cutrec",
    description:
      "A desktop video editor for turning screen and webcam recordings into edited and short-form video. Features transcript-driven cutting, silence and filler-word removal, AI edit suggestions, caption burn-in, and vertical (9:16) reframing.",
    repoLink: "https://github.com/Luke-Jodice/cutroom",
    technologies: ["TypeScript", "Electron", "React", "ffmpeg"],
    art: "timeline",
  },
] as const;

export default function ProjectShowcase() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {showcase.map((project) => (
        <PreviewCard key={project.title} {...project} />
      ))}
    </div>
  );
}
