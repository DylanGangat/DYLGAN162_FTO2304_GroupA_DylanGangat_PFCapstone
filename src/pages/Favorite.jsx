import { useEffect, useState } from "react";
import FavoriteCard from "../components/FavoriteCard";
import FavoriteSortDropdown from "../components/FavoriteSortDropdown";

const Favorite = () => {
  const LOCAL_STORAGE_KEY = "favorite-episodes";
  const [selectedSortOption, setSelectedSortOption] = useState("");
  const [favorites, setFavorites] = useState(() => {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(favorites));
  }, [favorites]);

  const handleSortFilter = (value) => {
    setSelectedSortOption(value);

    // if (value === "az") {
    //   const result = favorites
    //     .map((podcast) => podcast)
    //     .sort((a, b) => a.title.localeCompare(b.title));

    //   setFavorites(result);
    // }

    // if (value === "za") {
    //   const result = favorites
    //     .map((podcast) => podcast)
    //     .sort((a, b) => b.title.localeCompare(a.title));

    //   setFavorites(result);
    // }

    // if (value === "ascending") {
    //   const result = favorites
    //     .map((podcast) => podcast)
    //     .sort(
    //       (a, b) =>
    //         new Date(a.updated).getTime() - new Date(b.updated).getTime(),
    //     );

    //   setFavorites(result);
    // }

    // if (value === "descending") {
    //   const result = favorites
    //     .map((podcast) => podcast)
    //     .sort(
    //       (a, b) =>
    //         new Date(b.updated).getTime() - new Date(a.updated).getTime(),
    //     );

    //   setFavorites(result);
    // }
    console.log(value);
  };

  return (
    <section className="py-8">
      <div className="mx-auto max-w-6xl px-8">
        <h1 className="bg-gradient-to-r from-accent-400 to-accent-500 bg-clip-text font-heading text-3xl font-bold text-transparent">
          Favorites
        </h1>

        <FavoriteSortDropdown
          selectedSortOption={selectedSortOption}
          handleSortFilter={handleSortFilter}
        />

        {favorites.length > 0 ? (
          <div className="mt-8 grid grid-cols-favorite justify-center gap-4 border-t-2 border-secondary">
            {favorites.map((favorite) => (
              <FavoriteCard
                key={favorite.id}
                favorite={favorite}
                setFavorites={setFavorites}
              />
            ))}
          </div>
        ) : (
          <h2 className="mt-8 py-8 text-center">
            Oops it seems like you have no favorites...
          </h2>
        )}
      </div>
    </section>
  );
};

export default Favorite;
