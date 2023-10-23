const PodcastFilterPanel = () => {
  return (
    <div className="mt-8 grid gap-4 sm:auto-cols-fr sm:grid-flow-col">
      <div className="w-full">
        <label htmlFor="input-label" className="mb-2 block text-sm font-medium">
          Filter By Title
        </label>
        <input
          name="searchTitle"
          type="text"
          id="input-label"
          className="block w-full rounded-md border-orange-500 bg-orange-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500"
          placeholder="Filter By Title"
        />
      </div>

      <div className="w-full">
        <label
          htmlFor="sorting-label"
          className="mb-2 block text-sm font-medium"
        >
          Sorted By:
        </label>
        <select
          name="selectedSorting"
          id="sorting-label"
          className="block w-full rounded-lg border-orange-500 bg-orange-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500"
        >
          <option value="">Choose Order</option>
          <option value="a-z">A-Z</option>
          <option value="z-a">Z-A</option>
          <option value="ascending">Date Updated (Ascending Order)</option>
          <option value="descending">Date Updated (Decending Order)</option>
        </select>
      </div>

      <div className="w-full">
        <label htmlFor="genre-label" className="mb-2 block text-sm font-medium">
          Sort By Genre:
        </label>
        <select
          name="selectedGenre"
          id="genre-label"
          className="block w-full rounded-lg border-orange-500 bg-orange-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500"
        >
          <option value="">Choose Genre</option>
          <option value="1">Personal Growth</option>
          <option value="2">True Crime and Investigative Journalism</option>
          <option value="3">History</option>
          <option value="4">Comedy</option>
          <option value="5">Entertainment</option>
          <option value="6">Business</option>
          <option value="7">Fiction</option>
          <option value="8">News</option>
          <option value="9">Kids and Family</option>
        </select>
      </div>
    </div>
  );
};

export default PodcastFilterPanel;
