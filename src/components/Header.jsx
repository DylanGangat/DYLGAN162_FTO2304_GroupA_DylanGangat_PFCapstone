import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWaveSquare } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { supabase } from "../../config";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getUserData = async () => {
      const result = await supabase.auth.getUser();
      if (result.data?.user) {
        setUser(result.data?.user);
      }
    };

    getUserData();
  }, []);

  const handleSignOut = async () => {
    supabase.auth.signOut();
    setUser(null);
    navigate("/");
  };

  return (
    <header className="border-b-2 border-secondary bg-background py-6 font-body font-bold tracking-wide text-body">
      <div className="mx-auto max-w-6xl px-8">
        <nav className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:justify-between">
          <Link
            to="/home"
            className="logo flex cursor-pointer gap-1 transition duration-300 hover:text-accent-500
          focus:text-accent-500"
          >
            <FontAwesomeIcon
              icon={faWaveSquare}
              size="lg"
              style={{ color: "#ff0000" }}
            />
            <span className="font-semibold">WAVIFY.</span>
          </Link>

          <ul className="flex flex-wrap items-center justify-center gap-4">
            <li
              className="cursor-pointertransition duration-300 hover:text-accent-500
          focus:text-accent-500"
            >
              <Link to="/home">HOME</Link>
            </li>
            <li
              className="cursor-pointertransition duration-300 hover:text-accent-500
          focus:text-accent-500"
            >
              <Link to="/favorite">FAVORITES</Link>
            </li>

            {user && (
              <button
                className="inline-flex rounded-lg bg-secondary px-3 py-2 transition duration-300 hover:bg-transparent
          hover:text-accent-500 focus:bg-transparent focus:text-accent-500"
                onClick={handleSignOut}
              >
                LOG OUT
              </button>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
