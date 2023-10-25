import PodcastFilterPanel from "./PodcastFilterPanel";
import PodcastCard from "./PodcastCard";

const PodcastGrid = () => {
  return (
    <section className="py-8">
      <div className="mx-auto max-w-6xl px-8">
        <h1 className="font-heading bg-gradient-to-r from-accent-400 to-accent-500 bg-clip-text text-3xl font-bold text-transparent">
          Browse Podcasts
        </h1>
        <PodcastFilterPanel />
        <div className="mt-8 grid grid-cols-podcast gap-4 border-t-2 border-secondary py-8">
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
