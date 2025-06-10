import { useEffect, useState } from "react";

export function useFavourites() {
  const [favourites, setFavourites] = useState(() => {
    // Hent fra localStorage ved første render
    const stored = localStorage.getItem("favourites");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    // Oppdater localStorage når listen endres
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  function toggleFavourite(id) {
    setFavourites((prev) =>
      prev.includes(id)
        ? prev.filter((fav) => fav !== id)
        : [...prev, id]
    );
  }

  function isFavourite(id) {
    return favourites.includes(id);
  }

  return { favourites, toggleFavourite, isFavourite };
}
