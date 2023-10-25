import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWaveSquare } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header className="text-body font-body border-b-2 border-secondary bg-background py-6 font-bold tracking-wide">
      <div className="mx-auto max-w-6xl px-8">
        <nav className="flex flex-wrap items-center justify-between gap-4">
          <Link
            to="/"
            className="logo flex cursor-pointer gap-1 transition duration-300 hover:text-accent-500
          focus:text-accent-500"
          >
            <FontAwesomeIcon
              icon={faWaveSquare}
              beat
              size="lg"
              style={{ color: "#ff0000" }}
            />
            <span className="font-semibold">WAVIFY.</span>
          </Link>

          <ul className="nav-list  flex gap-4">
            <li
              className="cursor-pointer transition duration-300 hover:text-accent-500
          focus:text-accent-500"
            >
              <Link to="/">HOME</Link>
            </li>
            <li
              className="cursor-pointer transition duration-300 hover:text-accent-500
          focus:text-accent-500"
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
