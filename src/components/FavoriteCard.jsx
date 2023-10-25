import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const FavoriteCard = () => {
  return (
    <div className="border-b-2 border-secondary py-4">
      <div>
        <h4 className="text-lg font-bold">She Had the Medical Mind</h4>
        <div className="mt-2 flex items-center justify-between gap-2">
          <span className="text-sm font-semibold">Season 1: Episode 1</span>
          <span className="text-sm font-semibold">Added: 24 Oct, 20:57PM</span>
        </div>
        <p className="text-sm font-semibold ">Updated: 22 Nov 2022</p>
        <p className="mt-4">
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
            icon={faTrashCan}
            size="xl"
          />
        </div>
      </div>
    </div>
  );
};

export default FavoriteCard;
