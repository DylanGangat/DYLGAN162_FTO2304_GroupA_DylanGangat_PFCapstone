const FavoriteSortDropdown = () => {
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
        className="bg-secondary focus:border-accent-500 focus:ring-accent-500 block w-full rounded-lg px-4 py-3 text-sm"
      >
        <option value="">Choose Order</option>
        <option value="a-z">A-Z</option>
        <option value="z-a">Z-A</option>
        <option value="ascending">Date Updated (Ascending Order)</option>
        <option value="descending">Date Updated (Decending Order)</option>
      </select>
    </div>
  );
}

export default FavoriteSortDropdown;