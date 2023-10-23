import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Podcast from "./pages/Podcast";
import Favorite from "./pages/Favorite";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/podcast/:id" element={<Podcast />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
