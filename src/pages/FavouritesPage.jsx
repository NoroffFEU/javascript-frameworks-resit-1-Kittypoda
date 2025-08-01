import { useEffect, useState } from 'react';
import { useFavourites } from '../hooks/useFavourites';
import GameCard from '../components/GameCard';
import { useLoader } from '../context/LoaderContext';

function FavouritesPage() {
  const { favourites, toggleFavourite, isFavourite } = useFavourites();
  const [games, setGames] = useState([]);
  const [error, setError] = useState('');
  const { setIsLoading } = useLoader(); 

  useEffect(() => {
    async function fetchAllGames() {
      setIsLoading(true);
      try {
        const response = await fetch('https://v2.api.noroff.dev/old-games');
        if (!response.ok) throw new Error('Failed to fetch games');
        const data = await response.json();

        const filtered = data.data.filter((game) => favourites.includes(game.id));
        setGames(filtered);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false); 
      }
    }

    fetchAllGames();
  }, [favourites, setIsLoading]);

  if (error) return <p className="px-4 md:px-20">Error: {error}</p>;
  if (games.length === 0)
    return <p className="px-4 md:px-20">You haven't added any favourites yet.</p>;

  return (
    <div className="min-h-[800px]">
      <div className="px-4 pb-20 pt-10 md:px-20">
        <h1 className="mb-4 text-xl">My Favourites</h1>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
          {games.map((game) => (
            <GameCard
              key={game.id}
              game={game}
              isFavourite={isFavourite}
              toggleFavourite={toggleFavourite}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FavouritesPage;

