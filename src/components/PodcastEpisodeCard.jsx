import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const PodcastEpisodeCard = () => {
  return (
    <div className="border-b-2 border-secondary py-4">
      <div>
        <h4 className="text-lg font-bold">
          She Had the Medical Mind
        </h4>
        <span className="inline-block text-sm font-semibold">Episode 1</span>
        <p className="mt-3">
          Tee befriends Sylvia and feels compelled to help her.
        </p>
        <div className="mt-4 grid grid-cols-3 items-center gap-4">
          <audio
            className="col-span-2 max-h-10 w-full"
            src="https://podcast-api.netlify.app/placeholder-audio.mp3"
            controls
          ></audio>
          <FontAwesomeIcon
            className="col-span-1 cursor-pointer justify-self-end transition duration-300 hover:text-accent-500 focus:text-accent-500"
            icon={faHeart}
            size="xl"
          />
        </div>
      </div>
    </div>
  );
};

export default PodcastEpisodeCard;
