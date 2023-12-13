import { Route, Routes } from "react-router-dom";
import "./App.css";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Podcast from "./pages/Podcast";
import Favorite from "./pages/Favorite";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LoginAuth from "./pages/LoginAuth";
import { supabase } from "./config/supabaseClient";
import { initGA, logPageView } from "./analytics";

function App() {
  const [userId, setUserId] = useState("");

  useEffect(() => {
    // Tracking for google analytics
    initGA();
    logPageView();
    // Fetch the current session and set it
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUserId(session.user.id);
    });

    // Subscribe to auth state changes and set the session when it changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUserId(session.user.id);
    });

    // Return a cleanup function that unsubscribes from the auth state changes
    return () => subscription.unsubscribe();
  }, []);

  return (
    <>
      <Header userId={userId} setUserId={setUserId} />

      <main className="min-h-custom bg-background font-body text-body selection:bg-secondary selection:text-white">
        <Routes>
          <Route path="/" element={<LoginAuth />} />
          <Route path="/home" element={<Home />} />
          <Route path="/podcast/:id" element={<Podcast userId={userId} />} />
          <Route path="/favorite" element={<Favorite userId={userId} />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
