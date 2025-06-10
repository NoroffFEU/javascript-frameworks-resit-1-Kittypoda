import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import GameDetails from "./pages/GameDetails";
import FavouritesPage from "./pages/FavouritesPage"; // ← Legg til denne
import "./index.css";
import Header from "./components/Header";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/games/:id" element={<GameDetails />} />
        <Route path="/favourites" element={<FavouritesPage />} /> {/* ← Ny rute */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

