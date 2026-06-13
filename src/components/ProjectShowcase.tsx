import PreviewCard from "./PreviewCard";

const showcase = [
  {
    title: "MBTA SDK",
    description:
      "A middleware implementation of the MBTA API to assist with writing applications interacting with data around the MBTA T system.",
    repoLink: "https://github.com/Luke-Jodice/MBTA-SDK",
    technologies: ["JavaScript", "API", "Integration"],
  },
  {
    title: "SoundRoute",
    description:
      "A cross-platform app that blends trip planning with music curation. Plan your route, and AI recommends songs matched to terrain, speed, time of day, and your taste. Full manual control with Spotify and YouTube Music integration plus real-time playback sync.",
    repoLink: "https://github.com/Luke-Jodice/vibedrive",
    liveLink: "https://vibedrive-topaz.vercel.app/",
    technologies: ["JavaScript", "Spotify API"],
  },
] as const;

export default function ProjectShowcase() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {showcase.map((project) => (
        <PreviewCard key={project.title} {...project} />
      ))}
    </div>
  );
}
