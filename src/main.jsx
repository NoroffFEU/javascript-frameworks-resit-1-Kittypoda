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
import { LoaderProvider, useLoader } from "./context/LoaderContext";
import RetroLoader from "./components/RetroLoader";

function LayoutWrapper() {
  const { isLoading } = useLoader();

  return (
    <>
      {isLoading && <RetroLoader />}
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
            className: "bg-yellow text-black border-2 border-purple shadow-btnsolid",
          },
          error: {
            icon: null,
            className: "bg-pink text-black border-2 border-purple shadow-btnsolid",
          },
        }}
      />

      <Routes>
        <Route path="/home" element={<App />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/games/:id" element={<GameDetails />} />
        <Route path="/favourites" element={<FavouritesPage />} />
        <Route path="/genre" element={<Genre />} />
      </Routes>

      <Footer />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LoaderProvider>
      <BrowserRouter>
        <LayoutWrapper />
      </BrowserRouter>
    </LoaderProvider>
  </React.StrictMode>
);


