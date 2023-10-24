import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="py-6 bg-background border-b-2 border-secondary text-base">
      <div className="mx-auto max-w-6xl px-8">
        <nav className="flex flex-wrap items-center justify-between gap-4">
          <Link to="/" className="logo">
            <span className="font-semibold">WAVIFY.</span>
          </Link>

          <ul className="nav-list flex gap-4 font-semibold">
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/favorite">FAVORITES</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
