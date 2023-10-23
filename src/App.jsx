import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Show from "./pages/Show";
import Favorites from "./pages/Favorites";
import "./App.css";

function App() {
  return (
    <>
      <header className="site-header">
        <div className="container">
          <nav className="main-nav">
            <a href="#" className="logo">
              <span>WAVIFY.</span>
            </a>

            <ul className="nav-list">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/favorites">Favorites</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/show/:id" element={<Show />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </>
  );
}

export default App;
