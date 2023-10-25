const PodcastFilterPanel = () => {
  return (
    <div className="mt-8 grid gap-4 border-t-2 border-secondary pt-8 sm:auto-cols-fr sm:grid-flow-col">
      <div className="w-full">
        <label
          htmlFor="filter"
          className="mb-2 block text-sm font-bold"
        >
          Filter By Title
        </label>
        <input
          name="searchTitle"
          type="text"
          id="filter"
          className="block w-full rounded-md bg-secondary px-4 py-3 text-sm focus:border-accent-500 focus:ring-accent-500"
          placeholder="Filter By Title"
        />
      </div>

      <div className="w-full">
        <label htmlFor="sorting" className="mb-2 block text-sm font-bold">
          Sorted By:
        </label>
        <select
          name="selectedSorting"
          id="sorting"
          className="block w-full rounded-lg bg-secondary px-4 py-3 text-sm focus:border-accent-500 focus:ring-accent-500"
        >
          <option value="">Choose Order</option>
          <option value="a-z">A-Z</option>
          <option value="z-a">Z-A</option>
          <option value="ascending">Date Updated (Ascending Order)</option>
          <option value="descending">Date Updated (Decending Order)</option>
        </select>
      </div>

      <div className="w-full">
        <label htmlFor="genre" className="mb-2 block text-sm font-bold">
          Sort By Genre:
        </label>
        <select
          name="selectedGenre"
          id="genre"
          className="block w-full rounded-lg bg-secondary px-4 py-3 text-sm focus:border-accent-500 focus:ring-accent-500"
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
