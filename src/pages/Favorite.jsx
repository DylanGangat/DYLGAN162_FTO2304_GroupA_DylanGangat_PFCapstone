import FavoriteCard from "../components/FavoriteCard";
import FavoriteSortDropdown from "../components/FavoriteSortDropdown";

const Favorite = () => {
  return (
    <section className="py-8">
      <div className="mx-auto max-w-6xl px-8">
        <h1 className="from-accent-300 to-accent-600 bg-gradient-to-r bg-clip-text text-3xl font-bold text-transparent">
          Favorites
        </h1>

        <FavoriteSortDropdown />

        <div className="border-secondary grid-cols-episode mt-8 grid gap-4 border-t-2">
          <FavoriteCard />
          <FavoriteCard />
          <FavoriteCard />
          <FavoriteCard />
        </div>
      </div>
    </section>
  );
};

export default Favorite;
