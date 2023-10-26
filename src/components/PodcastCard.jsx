import { format } from "date-fns";
import { Link } from "react-router-dom";

const PodcastCard = ({ podcast, handleGenreFilter }) => {
  const { id, title, description, image, seasons, genres, updated } = podcast;

  const GENRES = {
    1: "Personal Growth",
    2: "True Crime and Investigative Journalism",
    3: "History",
    4: "Comedy",
    5: "Entertainment",
    6: "Business",
    7: "Fiction",
    8: "News",
    9: "Kids and Family",
  };

  return (
    <div className="max-w-255 overflow-hidden rounded-lg">
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
        {/* <p className="mt-4">{`${description.slice(0, 55)}...`}</p> */}
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
        <span className="mt-3 inline-block text-sm font-semibold">
          Updated: {format(new Date(updated), "d MMM y")}
        </span>
      </div>
    </div>
  );
};

export default PodcastCard;
