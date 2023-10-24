import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-background border-secondary border-b-2 py-6 text-base">
      <div className="mx-auto max-w-6xl px-8">
        <nav className="flex flex-wrap items-center justify-between gap-4">
          <Link
            to="/"
            className="logo hover:text-accent-500 focus:text-accent-500 cursor-pointer transition
          duration-300"
          >
            <span className="font-semibold">WAVIFY.</span>
          </Link>

          <ul className="nav-list flex gap-4 font-semibold">
            <li
              className="hover:text-accent-500 focus:text-accent-500 cursor-pointer transition
          duration-300"
            >
              <Link to="/">HOME</Link>
            </li>
            <li
              className="hover:text-accent-500 focus:text-accent-500 cursor-pointer transition
          duration-300"
            >
              <Link to="/favorite">FAVORITES</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
