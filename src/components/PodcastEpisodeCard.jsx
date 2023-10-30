import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { format } from "date-fns";
// import { v4 as uuid } from "uuid";
import { supabase } from "../config/supabaseClient";

const PodcastEpisodeCard = ({
  episodeData,
  season,
  podcast,
  favoritesData,
  setFavoritesData,
}) => {
  const { title, description, file, episode } = episodeData;

  const handleClickedFavorite = (podcast, season, episode) => {
    const newFavorite = {
      podcast: podcast.title,
      season: season.season,
      updated: format(new Date(podcast.updated), "d MMM y"),
      favorited: format(new Date(), "d MMM y, h:mm a"),
      title: episode.title,
      episode: episode.episode,
      description: episode.description,
      file: episode.file,
    };

    const isDuplicate = favoritesData.some((item) => {
      return (
        item.podcast === newFavorite.podcast &&
        item.title === newFavorite.title &&
        item.description === newFavorite.description
      );
    });

    // Add newFavorite to supabase database
    const handleSubmit = async () => {
      const { data } = await supabase
        .from("favorites")
        .insert([{ ...newFavorite }])
        .select();
    };

    if (!isDuplicate) {
      // Clone the existing favorites, add the newFavorite, and then sort
      setFavoritesData((prevEpisodes) => {
        const newFavorites = [...prevEpisodes, newFavorite];
        return newFavorites;
      });

      handleSubmit();
    }
  };

  return (
    <div className="border-b-2 border-secondary py-4">
      <h4 className="text-lg font-bold">{title}</h4>
      <span className="inline-block text-sm font-semibold">
        Episode {episode}
      </span>
      <p className="mt-3">
        {description
          ? description
          : "This episode unfortunely has no description."}
      </p>
      <div className="mt-4 grid grid-cols-3 items-center gap-4">
        <audio
          className="col-span-2 max-h-10 w-full"
          src={file}
          controls
        ></audio>
        <FontAwesomeIcon
          className="col-span-1 cursor-pointer justify-self-end transition duration-300 hover:text-accent-500 focus:text-accent-500"
          icon={faHeart}
          size="xl"
          onClick={() => handleClickedFavorite(podcast, season, episodeData)}
        />
      </div>
    </div>
  );
};

export default PodcastEpisodeCard;
