import PreviewCard from "../components/Preview-Card";

export default function experience() {

  return (
    <div className="flex space-x-4">
      {/* This is the showcase of the projects that I will be looking to show off */}
      {/* Will Soon systematically read in these values from Resume */}
      
      <PreviewCard
        title="MBTA SDK"
        description="A middleware implementation the MBTA API to assist with writing applications interacting with Data around the MBTA T system"
        repoLink="https://github.com/Luke-Jodice/MBTA-SDK"
        technologies={["Javascript | API Endpoints | Integration Tool"]}
      />
      <PreviewCard
        title="SoundRoute"
        description="a cross-platform app that blends trip planning with music curation. Plan your route, and AI recommends songs matched to terrain, speed, time of day, and your taste. Full manual control. Spotify & YouTube Music integration. Real-time playback sync. "
        repoLink="https://github.com/Luke-Jodice/vibedrive"
        liveLink="https://vibedrive-topaz.vercel.app/ "
        technologies={["Javascript | Spotify API "]}
      />
     
    </div>
  );
}
