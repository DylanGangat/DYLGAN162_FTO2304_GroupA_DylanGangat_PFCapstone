import { useEffect, useState } from "react";
import FavoriteCard from "../components/FavoriteCard";
import FavoriteSortDropdown from "../components/FavoriteSortDropdown";

const Favorite = () => {
  const LOCAL_STORAGE_KEY = "favorite-episodes";
  const [selectedSortOption, setSelectedSortOption] = useState("");
  const [favoritesData, setFavoritesData] = useState(() => {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
  });
  const [favorites, setFavorites] = useState(() => {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(favoritesData));
    setFavorites(favoritesData);
  }, [favoritesData]);

  const handleSortFilter = (value) => {
    setSelectedSortOption(value);

    if (value === "az") {
      const result = favoritesData
        .map((podcast) => podcast)
        .sort((a, b) => a.podcast.localeCompare(b.podcast));

      setFavorites(result);
    }

    if (value === "za") {
      const result = favoritesData
        .map((podcast) => podcast)
        .sort((a, b) => b.podcast.localeCompare(a.podcast));

      setFavorites(result);
    }

    if (value === "ascending") {
      const result = favoritesData
        .map((podcast) => podcast)
        .sort(
          (a, b) =>
            new Date(a.updated).getTime() - new Date(b.updated).getTime(),
        );

      setFavorites(result);
    }

    if (value === "descending") {
      const result = favoritesData
        .map((podcast) => podcast)
        .sort(
          (a, b) =>
            new Date(b.updated).getTime() - new Date(a.updated).getTime(),
        );

      setFavorites(result);
    }
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
                setFavoritesData={setFavoritesData}
                setSelectedSortOption={setSelectedSortOption}
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
