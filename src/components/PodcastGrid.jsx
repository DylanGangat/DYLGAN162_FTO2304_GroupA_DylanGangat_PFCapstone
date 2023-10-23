import PodcastFilterPanel from "./PodcastFilterPanel";
import PodcastCard from "./PodcastCard";

const PodcastGrid = () => {
  return (
    <section className="py-8">
      <div className="mx-auto max-w-6xl px-8">
        <h1 className="text-3xl font-bold">Browse Podcasts</h1>

        <PodcastFilterPanel />

        <div className="grid-cols-podcast mt-8 grid gap-4">
         
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
