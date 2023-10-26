import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const PodcastEpisodeCard = ({ episodeData }) => {
  const { title, description, file, episode } = episodeData;
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
        />
      </div>
    </div>
  );
};

export default PodcastEpisodeCard;
