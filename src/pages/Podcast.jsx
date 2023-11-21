import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GridLoader } from "react-spinners";
import { supabase } from "../config/supabaseClient";
import PodcastEpisodeCard from "../components/Podcast/PodcastEpisodeCard";
import PodcastHero from "../components/Podcast/PodcastHero";
import PodcastSeasonDropdown from "../components/Podcast/PodcastSeasonDropdown";

const Podcast = ({ userId }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [podcast, setPodcast] = useState([]);
  const [season, setSeason] = useState({});
  const [selectedSeasonOption, setSelectedSeasonOption] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [favoritesData, setFavoritesData] = useState([]);

  const { id } = useParams();

  const fetchPodcastData = async (id) => {
    try {
      setLoading(true);
      const response = await fetch(`https://podcast-api.netlify.app/id/${id}`);
      const data = await response.json();
      setPodcast(data);
      setSeason(data.seasons[0]);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSeasonFilter = (id) => {
    const seasonId = Number(id);
    setSelectedSeasonOption(seasonId);

    const foundSeason = podcast.seasons.find(
      (item) => item.season === seasonId,
    );

    if (foundSeason) {
      setSeason(foundSeason);
    }
  };

  useEffect(() => {
    fetchPodcastData(id);
  }, [id]);

  useEffect(() => {
    const fetchEpisodes = async () => {
      try {
        const { data } = await supabase.from("favorites").select("*");
        if (error) {
          throw new Error(error.message);
        }

        setFavorites(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchEpisodes();
  }, [favoritesData]);

  if (error) {
    return (
      <section className="py-8">
        <div className="mx-auto mt-8 max-w-6xl px-8">
          <h2 className="mt-8 py-8 text-center">Error: {error} :(</h2>
        </div>
      </section>
    );
  }

  const { title, episodes, image } = season;

  return (
    <section className="py-8">
      <div className="mx-auto mt-8 max-w-6xl px-8">
        {loading ? (
          <div className="min-h-carousel w-full py-8">
            <div className="flex">
              <GridLoader className="mx-auto " color="#ff0000" />
            </div>
          </div>
        ) : (
          <>
            <PodcastHero podcast={podcast} />

            <div className="mt-8">
              <PodcastSeasonDropdown
                podcast={podcast}
                handleSeasonFilter={handleSeasonFilter}
                selectedSeasonOption={selectedSeasonOption}
              />
              <div className="mt-8 text-center font-bold">
                <img
                  src={image}
                  className="mx-auto h-auto w-full max-w-255 rounded-lg object-cover"
                  alt={`${title} podcast show`}
                />

                <h2 className="mt-8 font-heading text-2xl">{title}</h2>
                <p className="mt-2 text-sm">
                  Total Episodes: {episodes?.length}
                </p>
              </div>
              <div className="mt-6">
                <h3 className="bg-gradient-to-r from-accent-400 to-accent-500 bg-clip-text font-heading font-bold tracking-wide text-transparent">
                  Episodes
                </h3>
                <div className="mt-6 grid grid-cols-episode gap-x-8 border-t-2 border-secondary">
                  {episodes &&
                    episodes.map((episode) => (
                      <PodcastEpisodeCard
                        key={episode.episode}
                        podcast={podcast}
                        season={season}
                        episodeData={episode}
                        favoritesData={favoritesData}
                        setFavoritesData={setFavoritesData}
                        userId={userId}
                      />
                    ))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Podcast;
