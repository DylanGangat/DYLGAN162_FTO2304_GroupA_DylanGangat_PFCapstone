import PodcastEpisodeCard from "../components/PodcastEpisodeCard";
import PodcastHero from "../components/PodcastHero";
import PodcastSeasonDropdown from "../components/PodcastSeasonDropdown";

const Podcast = () => {
  return (
    <section className="py-8">
      <div className="mx-auto mt-8 max-w-6xl px-8">
        
        <PodcastHero />
        
        <div className="mt-8">
          <PodcastSeasonDropdown />

          <div className="mt-6 text-center font-bold">
            <h2 className="font-heading text-2xl">Season 1</h2>
            <p className="mt-2 text-sm ">Total Episodes: 12</p>
          </div>

          <div className="mt-6">
            <h3 className="font-heading bg-gradient-to-r from-accent-400 to-accent-500 bg-clip-text font-bold tracking-wide text-transparent">
              Episodes
            </h3>

            <div className="mt-6 grid grid-cols-episode gap-x-8 border-t-2 border-secondary">
              <PodcastEpisodeCard />
              <PodcastEpisodeCard />
              <PodcastEpisodeCard />
              <PodcastEpisodeCard />
              <PodcastEpisodeCard />
              <PodcastEpisodeCard />
              <PodcastEpisodeCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Podcast;
