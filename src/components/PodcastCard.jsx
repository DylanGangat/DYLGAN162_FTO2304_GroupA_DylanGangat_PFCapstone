import { Link } from "react-router-dom";

const PodcastCard = () => {
  return (
    <div className="bg-secondary text-base overflow-hidden rounded-lg p-6">
      <div>
        <Link to="/podcast/123">
          <img
            className="h-auto w-full rounded-lg"
            src="https://content.production.cdn.art19.com/images/cc/e5/0a/08/cce50a08-d77d-490e-8c68-17725541b0ca/9dcebd4019d57b9551799479fa226e2a79026be5e2743c7aef19eac53532a29d66954da6e8dbdda8219b059a59c0abe6dba6049892b10dfb2f25ed90d6fe8d9a.jpeg"
            alt="Something Was Wrong podcast show"
          />
        </Link>
      </div>

      <div>
        <Link to="/podcast/123">
          <h3 className="mt-3 text-lg font-bold">Something Was Wrong</h3>
        </Link>

        <span className="text-sm font-bold ">Seasons: 14</span>
        <p className="mt-4">
          Something Was Wrong is an Iris Award-winning true-crime docuseries
          about...
        </p>
        <div className="mt-3 flex flex-wrap gap-1 text-sm font-semibold">
          <span>Personal Growth</span>
          <span>History</span>
          <span>Business</span>
        </div>
        <span className="mt-3 inline-block text-sm font-semibold">
          Updated: 2022-11-03T07:00:00.000Z
        </span>
      </div>
    </div>
  );
}

export default PodcastCard