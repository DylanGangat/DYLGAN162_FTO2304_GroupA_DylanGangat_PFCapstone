import PodcastFilterPanel from "./PodcastFilterPanel";
import PodcastCard from "./PodcastCard";
import { useEffect, useState } from "react";
import { GridLoader } from "react-spinners";

const PodcastGrid = () => {
  const [podcastData, setPodcastData] = useState([]);
  const [podcasts, setPodcasts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchPodcastsData = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://podcast-api.netlify.app/shows");
      const data = await response.json();
      setPodcastData(data);
      setPodcasts(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const filterPodcastsByGenre = (genreId) => {
    setPodcasts(
      podcastData.filter((podcast) => podcast.genres.includes(genreId)),
    );
    scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    fetchPodcastsData();
  }, []);

  return (
    <section className="py-8">
      <div className="mx-auto max-w-6xl px-8">
        <h1 className="font-heading bg-gradient-to-r from-accent-400 to-accent-500 bg-clip-text text-3xl font-bold text-transparent">
          Browse Podcasts
        </h1>

        <PodcastFilterPanel />

        <div className="mt-8 grid grid-cols-podcast gap-6 border-t-2 border-secondary py-8 ">
          {loading ? (
            <GridLoader className="mx-auto" color="#ff0000" />
          ) : (
            podcasts &&
            podcasts.map((podcast) => (
              <PodcastCard
                key={podcast.id}
                podcast={podcast}
                filterPodcastsByGenre={filterPodcastsByGenre}
              />
            ))
          )}

          {error && <h2>Error: {error} :(</h2>}
        </div>
      </div>
    </section>
  );
};

export default PodcastGrid;
