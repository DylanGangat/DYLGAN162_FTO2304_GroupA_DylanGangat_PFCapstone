import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Podcast from "./pages/Podcast";
import Favorite from "./pages/Favorite";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LoginAuth from "./pages/LoginAuth";

function App() {
  return (
    <>
      <Header />

      <main className="min-h-custom bg-background font-body text-body selection:bg-secondary selection:text-white">
        <Routes>
          <Route path="/" element={<LoginAuth />} />
          <Route path="/home" element={<Home />} />
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
