import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const FavoriteCard = ({ favorite, setFavorites }) => {
  const {
    podcast,
    title,
    episode,
    description,
    season,
    updated,
    favorited,
    id,
    file,
  } = favorite;

  const handleRemoveFavorite = (id) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((favorite) => favorite.id !== id),
    );
  };

  return (
    <div className="border-b-2 border-secondary py-4">
      <div>
        <h4 className="bg-gradient-to-r from-accent-400 to-accent-500 bg-clip-text font-heading text-lg font-bold text-transparent">
          {podcast} - {title}
        </h4>
        <span className="mt-1 block bg-gradient-to-r from-accent-400 to-accent-500 bg-clip-text text-sm font-semibold text-transparent">
          Season {season}: Episode {episode}
        </span>
        <span className="mt-3 block text-sm font-semibold">
          Added: {favorited}
        </span>
        <p className="mt-1 text-sm font-semibold">Updated: {updated}</p>
        <p className="mt-4">
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
            icon={faTrashCan}
            size="xl"
            onClick={() => handleRemoveFavorite(id)}
          />
        </div>
      </div>
    </div>
  );
};

export default FavoriteCard;
