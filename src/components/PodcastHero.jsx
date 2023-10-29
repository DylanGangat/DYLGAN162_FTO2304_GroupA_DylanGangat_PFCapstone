import { useNavigate } from "react-router-dom";

const PodcastHero = ({ podcast }) => {
  const { title, description, image } = podcast;

  const navigate = useNavigate();

  return (
    <div className="grid gap-8 sm:auto-cols-fr sm:grid-flow-col">
      <div>
        <span
          className="cursor-pointer font-bold transition duration-300 hover:text-accent-500
           focus:text-accent-500"
          onClick={() => navigate("/home")}
        >
          Back
        </span>
        <h1 className="mt-8 bg-gradient-to-r from-accent-400 to-accent-500 bg-clip-text font-heading text-3xl font-bold text-transparent">
          {title}
        </h1>
        <p className="mt-8">{description}</p>

        {podcast?.genres && (
          <div className="mt-6 flex flex-wrap gap-2 text-sm font-semibold">
            {podcast.genres.slice(1).map((genre) => (
              <span
                className="cursor-pointer rounded-lg bg-secondary px-2 py-1.5 transition duration-300 hover:bg-accent-500
           focus:bg-accent-500"
                key={genre}
              >
                {genre}
              </span>
            ))}
          </div>
        )}
      </div>
      <figure>
        <img
          className="h-auto w-full rounded-lg object-cover"
          src={image}
          alt={`${title} podcast show`}
        />
      </figure>
    </div>
  );
};

export default PodcastHero;
