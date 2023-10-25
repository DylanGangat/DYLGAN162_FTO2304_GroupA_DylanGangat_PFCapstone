import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Podcast from "./pages/Podcast";
import Favorite from "./pages/Favorite";
import Header from "./components/Header";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />

      <main className="bg-background text-body font-body">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/podcast/:id" element={<Podcast />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
