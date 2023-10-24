import PodcastFilterPanel from "./PodcastFilterPanel";
import PodcastCard from "./PodcastCard";

const PodcastGrid = () => {
  return (
    <section className="py-8">
      <div className="mx-auto max-w-6xl px-8">
        <h1 className="from-accent-300 to-accent-600 bg-gradient-to-r bg-clip-text text-3xl font-bold text-transparent">
          Browse Podcasts
        </h1>

        <PodcastFilterPanel />

        <div className="mt-8 grid grid-cols-podcast gap-4">
          <PodcastCard />
          <PodcastCard />
          <PodcastCard />
          <PodcastCard />

          <PodcastCard />
          <PodcastCard />
          <PodcastCard />
          <PodcastCard />
        </div>
      </div>
    </section>
  );
};

export default PodcastGrid;
