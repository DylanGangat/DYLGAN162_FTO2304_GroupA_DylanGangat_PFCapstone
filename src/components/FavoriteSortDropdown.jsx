const FavoriteSortDropdown = ({ handleSortFilter, selectedSortOption }) => {
  const SORTING_OPTIONS = [
    { value: "", label: "Choose Order" },
    { value: "az", label: "A-Z" },
    { value: "za", label: "Z-A" },
    { value: "ascending", label: "Date Updated (Ascending Order)" },
    { value: "descending", label: "Date Updated (Decending Order)" },
  ];

  return (
    <div className="mx-auto mr-0 mt-8 max-w-xs">
      <label
        htmlFor="favoriteSortDropdownLabel"
        className="mb-2 block text-sm font-bold"
      >
        Sorted By:
      </label>
      <select
        name="selectedSorting"
        id="favoriteSortDropdownLabel"
        className="block w-full rounded-lg bg-secondary px-4 py-3 text-sm focus:border-accent-500 focus:ring-accent-500"
        value={selectedSortOption}
        onChange={(e) => handleSortFilter(e.target.value)}
      >
        {SORTING_OPTIONS.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FavoriteSortDropdown;
