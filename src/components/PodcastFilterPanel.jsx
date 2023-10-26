const PodcastFilterPanel = ({
  handleSearchFilter,
  searchInput,
  handleSortFilter,
  selectedSortOption,
}) => {
  const SORTING_OPTIONS = [
    { value: "", label: "Choose Order" },
    { value: "az", label: "A-Z" },
    { value: "za", label: "Z-A" },
    { value: "ascending", label: "Date Updated (Ascending Order)" },
    { value: "descending", label: "Date Updated (Decending Order)" },
  ];

  return (
    <div className="mt-8 grid  gap-4 border-t-2 border-secondary pt-8 sm:auto-cols-fr sm:grid-flow-col">
      <div className="max-w-sm">
        <label htmlFor="filter" className="mb-2 block text-sm font-bold">
          Filter By Title
        </label>
        <input
          name="searchTitle"
          value={searchInput}
          type="text"
          id="filter"
          className="block w-full rounded-md bg-secondary px-4 py-3 text-sm focus:border-accent-500 focus:ring-accent-500"
          placeholder="Filter By Title"
          onChange={(e) => handleSearchFilter(e.target.value)}
        />
      </div>

      <div className="max-w-sm">
        <label htmlFor="sorting" className="mb-2 block text-sm font-bold">
          Sorted By:
        </label>

        <select
          name="selectedSorting"
          id="sorting"
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
    </div>
  );
};

export default PodcastFilterPanel;
