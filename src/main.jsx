import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import GameDetails from "./pages/GameDetails";
import FavouritesPage from "./pages/FavouritesPage";
import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Header />
    <Toaster position="bottom-right" reverseOrder={false} />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/games/:id" element={<GameDetails />} />
      <Route path="/favourites" element={<FavouritesPage />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

