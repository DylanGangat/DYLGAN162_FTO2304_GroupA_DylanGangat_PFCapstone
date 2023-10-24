const PodcastSeasonDropdown = () => {
  return (
    <div className="mx-auto max-w-sm text-center">
      <label
        htmlFor="seasonDropdownLabel"
        className="mb-2 block text-sm font-bold"
      >
        Select Season:
      </label>
      <select
        name="selectedSorting"
        id="seasonDropdownLabel"
        className="bg-secondary block w-full rounded-lg px-4 py-3 text-base text-sm focus:border-accent-500 focus:ring-accent-500"
      >
        <option value="">Select a Season</option>
        <option value="0">Season 1</option>
        <option value="1">Season 2</option>
        <option value="2">Season 3</option>
        <option value="3">Season 4</option>
        <option value="4">Season 5</option>
      </select>
    </div>
  );
};

export default PodcastSeasonDropdown;
