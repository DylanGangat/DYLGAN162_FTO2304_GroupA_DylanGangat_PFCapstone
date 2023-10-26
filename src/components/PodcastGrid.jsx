import { useEffect, useRef, useState } from "react";
import { GridLoader } from "react-spinners";

import PodcastFilterPanel from "./PodcastFilterPanel";
import PodcastCard from "./PodcastCard";
import Carousel from "./Carousel";

import Fuse from "fuse.js";

const PodcastGrid = () => {
  const [podcastData, setPodcastData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [podcasts, setPodcasts] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [selectedSortOption, setSelectedSortOption] = useState("");

  const scrollToRef = useRef(null);
  const fuse = new Fuse(podcastData, {
    keys: ["title"],
    includeScore: true,
  });

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
    setSelectedSortOption("");

    setPodcasts(
      podcastData.filter((podcast) => podcast.genres.includes(genreId)),
    );

    scrollToRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleSearchFilter = (name) => {
    setSelectedSortOption("");
    setSearchInput(name);

    const results = searchInput
      ? fuse.search(searchInput).map((result) => result.item)
      : podcastData;

    setPodcasts(results);
  };

  const handleSortFilter = (value) => {
    setSearchInput("");

    setSelectedSortOption(value);

    if (value === "az") {
      const result = podcastData
        .map((podcast) => podcast)
        .sort((a, b) => a.title.localeCompare(b.title));

      setPodcasts(result);
    }

    if (value === "za") {
      const result = podcastData
        .map((podcast) => podcast)
        .sort((a, b) => b.title.localeCompare(a.title));

      setPodcasts(result);
    }

    if (value === "ascending") {
      const result = podcastData
        .map((podcast) => podcast)
        .sort(
          (a, b) =>
            new Date(a.updated).getTime() - new Date(b.updated).getTime(),
        );

      setPodcasts(result);
    }

    if (value === "descending") {
      const result = podcastData
        .map((podcast) => podcast)
        .sort(
          (a, b) =>
            new Date(b.updated).getTime() - new Date(a.updated).getTime(),
        );

      setPodcasts(result);
    }
  };

  useEffect(() => {
    fetchPodcastsData();
  }, []);

  return (
    <section className="py-8">
      <div className="mx-auto max-w-6xl px-8">
        {loading ? (
          <div className="min-h-carousel w-full py-8">
            <div className="flex">
              <GridLoader className="mx-auto " color="#ff0000" />
            </div>
          </div>
        ) : (
          <Carousel cards={podcastData} handleGenreFilter={handleGenreFilter} />
        )}

        <h1
          ref={scrollToRef}
          className="bg-gradient-to-r from-accent-400 to-accent-500 bg-clip-text font-heading text-3xl font-bold text-transparent"
        >
          Browse Podcasts
        </h1>
        <PodcastFilterPanel
          handleSearchFilter={handleSearchFilter}
          handleSortFilter={handleSortFilter}
          searchInput={searchInput}
          selectedSortOption={selectedSortOption}
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
