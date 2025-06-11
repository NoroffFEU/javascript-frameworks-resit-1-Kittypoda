import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import GameDetails from "./pages/GameDetails";
import FavouritesPage from "./pages/FavouritesPage";
import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Genre from "./pages/GenrePage";
import { Toaster } from "react-hot-toast";
import LandingPage from "./pages/LandingPage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Header />

    <Toaster
  position="bottom-right"
  reverseOrder={false}
  toastOptions={{
    className: "rounded shadow-btnsolid font-medium text-sm",
    style: {
      padding: "12px 16px",
    },
    success: {
      icon: null, 
      className: "bg-pink text-black border border-purple",
    },
    error: {
      icon: null,
      className: "bg-yellow text-black border border-purple",
    },
  }}
/>

    <Routes>
      <Route path="/home" element={<App />} />
      < Route path="/" element= {<LandingPage />} />
      <Route path="/games/:id" element={<GameDetails />} />
      <Route path="/favourites" element={<FavouritesPage />} />
      <Route path="/genre" element={<Genre />} />
    </Routes>

    <Footer />
  </BrowserRouter>
);


