import PodcastFilterPanel from "./PodcastFilterPanel";
import PodcastCard from "./PodcastCard";
import { useEffect, useState } from "react";
import { GridLoader } from "react-spinners";

const PodcastGrid = () => {
  const [podcastData, setPodcastData] = useState([]);
  const [podcasts, setPodcasts] = useState([]);
  const [searchInput, setSearchInput] = useState("");
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

  const handleGenreFilter = (genreId) => {
    setSearchInput("");
    setPodcasts(
      podcastData.filter((podcast) => podcast.genres.includes(genreId)),
    );
    scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSearchFilter = (name) => {
    setSearchInput(name.toLowerCase());
    setPodcasts(
      podcastData.filter((podcast) =>
        podcast.title.toLowerCase().includes(name),
      ),
    );
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

        <PodcastFilterPanel
          handleSearchFilter={handleSearchFilter}
          searchInput={searchInput}
        />

        {loading ? (
          <div className="mt-8 grid gap-6 py-8">
            <GridLoader className="mx-auto" color="#ff0000" />
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-podcast gap-6 border-t-2 border-secondary py-8">
            {podcasts &&
              podcasts.map((podcast) => (
                <PodcastCard
                  key={podcast.id}
                  podcast={podcast}
                  handleGenreFilter={handleGenreFilter}
                />
              ))}
          </div>
        )}

        {error && (
          <h2 className="mt-8 border-t-2 border-secondary py-8">
            Error: {error} :(
          </h2>
        )}
      </div>
    </section>
  );
};

export default PodcastGrid;
