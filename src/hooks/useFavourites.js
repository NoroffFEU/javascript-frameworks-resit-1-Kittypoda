
import { useEffect, useRef, useState } from 'react';
import { toast } from 'react-hot-toast';

export function useFavourites() {
  const [favourites, setFavourites] = useState(() => {
    const stored = localStorage.getItem('favourites');
    return stored ? JSON.parse(stored) : [];
  });

  const toastShownRef = useRef(false);

  useEffect(() => {
    localStorage.setItem('favourites', JSON.stringify(favourites));
    toastShownRef.current = false; // Reset for neste endring
  }, [favourites]);

  function toggleFavourite(id) {
    setFavourites((prev) => {
      const isAlreadyFavourite = prev.includes(id);
      const updated = isAlreadyFavourite ? prev.filter((fav) => fav !== id) : [...prev, id];

      if (!arraysEqual(prev, updated) && !toastShownRef.current) {
        toast[isAlreadyFavourite ? 'error' : 'success'](
          isAlreadyFavourite ? 'Removed from favourites' : 'Added to favourites'
        );
        toastShownRef.current = true;
      }

      return updated;
    });
  }

  function isFavourite(id) {
    return favourites.includes(id);
  }

  return { favourites, toggleFavourite, isFavourite };
}

function arraysEqual(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}
