import { useEffect, useState } from "react";

export function useFavourites() {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("favourites");
    if (stored) {
      setFavourites(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  function toggleFavourite(id) {
    setFavourites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  }

  function isFavourite(id) {
    return favourites.includes(id);
  }

  return { favourites, toggleFavourite, isFavourite };
}
