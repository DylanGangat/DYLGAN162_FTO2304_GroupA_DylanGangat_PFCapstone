const PodcastSeasonDropdown = ({
  podcast,
  handleSeasonFilter,
  selectedSeasonOption,
}) => {
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
        className="block w-full rounded-lg bg-secondary px-4 py-3 text-sm focus:border-accent-500 focus:ring-accent-500"
        onChange={(e) => handleSeasonFilter(e.target.value)}
        value={selectedSeasonOption}
      >
        <option value="">Select a Season</option>
        {podcast?.seasons &&
          podcast.seasons.map((option) => (
            <option key={option.season} value={option.season}>
              {option.title}
            </option>
          ))}
      </select>
    </div>
  );
};

export default PodcastSeasonDropdown;
