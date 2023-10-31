import { Link } from "react-router-dom";
import { GENRES } from "../../constants";

const CarouselCard = ({ card, handleGenreFilter }) => {
  const { title, id, image, seasons, genres } = card;

  return (
    <div className="min-w-255 max-w-255 overflow-hidden rounded-lg">
      <div className="overflow-hidden">
        <Link to={`/podcast/${id}`}>
          <img
            className="h-auto w-full cursor-pointer rounded-lg object-cover transition duration-500 hover:scale-125"
            src={image}
            alt={`${title} podcast show`}
          />
        </Link>
      </div>

      <div>
        <Link to={`/podcast/${id}`}>
          <h3
            className="mt-3 font-heading text-lg font-bold transition duration-300 hover:text-accent-500
           focus:text-accent-500"
          >
            {title}
          </h3>
        </Link>

        <span className="text-sm font-bold">{`Seasons: ${seasons}`}</span>
        <div className="mt-3 flex flex-wrap gap-2 text-sm font-semibold">
          {genres.map((genre) => (
            <span
              className="cursor-pointer rounded-lg bg-secondary p-1 transition duration-300 hover:bg-accent-500
                    focus:bg-accent-500"
              key={genre}
              onClick={() => handleGenreFilter(genre)}
            >
              {GENRES[genre]}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarouselCard;
