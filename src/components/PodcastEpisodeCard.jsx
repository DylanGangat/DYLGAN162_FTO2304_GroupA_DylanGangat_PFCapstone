import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { format } from "date-fns";
import { v4 as uuid } from "uuid";

const PodcastEpisodeCard = ({
  episodeData,
  season,
  podcast,
  favorites,
  setFavorites,
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
      id: uuid(),
    };

    const isDuplicate = favorites.some((item) => {
      return (
        item.podcast === newFavorite.podcast &&
        item.title === newFavorite.title &&
        item.description === newFavorite.description
      );
    });

    const arrangeInOrder = (updateFavorites) => {
      return updateFavorites
        .map((episode) => episode)
        .sort((a, b) => {
          // First, compare by "podcast"
          if (a.podcast !== b.podcast) {
            return a.podcast.localeCompare(b.podcast);
          }
          // If the "podcast" is the same, compare by "season"
          if (a.season !== b.season) {
            return a.season - b.season;
          }
          // If both "podcast" and "season" are the same, compare by "episode"
          return a.episode - b.episode;
        });
    };

    if (!isDuplicate) {
      // Clone the existing favorites, add the newFavorite, and then sort
      setFavorites((prevEpisodes) => {
        const newFavorites = [...prevEpisodes, newFavorite];
        return arrangeInOrder(newFavorites);
      });
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
