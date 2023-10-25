import FavoriteCard from "../components/FavoriteCard";
import FavoriteSortDropdown from "../components/FavoriteSortDropdown";

const Favorite = () => {
  return (
    <section className="py-8">
      <div className="mx-auto max-w-6xl px-8">
        <h1 className="font-heading bg-gradient-to-r from-accent-400 to-accent-500 bg-clip-text text-3xl font-bold text-transparent">
          Favorites
        </h1>

        <FavoriteSortDropdown />

        <div className="mt-8 grid grid-cols-episode gap-4 border-t-2 border-secondary">
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
