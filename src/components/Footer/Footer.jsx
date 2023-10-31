import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWaveSquare } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="text-body font-body bg-background py-6 font-bold tracking-wide">
      <div className="mx-auto max-w-6xl px-8">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-secondary pb-6">
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
          <ul className="nav-list flex gap-4">
            <li
              className="cursor-pointer transition duration-300 hover:text-accent-500
          focus:text-accent-500"
            >
              <Link to="/home">HOME</Link>
            </li>
            <li
              className="cursor-pointer transition duration-300 hover:text-accent-500
          focus:text-accent-500"
            >
              <Link to="/favorite">FAVORITES</Link>
            </li>
          </ul>
        </div>
        <p className="text-center pt-6">© 2023 WAVIFY™. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer