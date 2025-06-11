import { useEffect, useState } from 'react';
import { useFavourites } from '../hooks/useFavourites';
import GameCard from '../components/GameCard';
import { Link } from 'react-router-dom';

function HomePage() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const { toggleFavourite, isFavourite } = useFavourites();

  useEffect(() => {
    async function fetchGames() {
      try {
        const response = await fetch('https://v2.api.noroff.dev/old-games');
        if (!response.ok) throw new Error('Something went wrong with the API call');
        const data = await response.json();
        setGames(data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchGames();
  }, []);

  const filteredGames = games.filter((game) => {
    const nameMatch = game.name.toLowerCase().includes(searchTerm.toLowerCase());
    const yearMatch = game.released.includes(searchTerm);
    return nameMatch || yearMatch;
  });

  if (loading) return <p className="px-4 md:px-20">Loading games...</p>;
  if (error) return <p className="px-4 md:px-20">Error: {error}</p>;

  return (
    <div className="min-h-[800px] p-4">
      <input
        type="text"
        placeholder="Search games.."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mt-4 w-full max-w-md rounded border border-yellow bg-gray p-3 text-sm placeholder-yellow shadow-btnsolid focus:border-pink focus:outline-none focus:ring-0 md:ml-20"
      />
      <Link
        to="/genre"
        className="mt-4 inline-block rounded border border-yellow bg-gray px-4 py-3 text-sm shadow-btnsolid transition hover:bg-pink md:ml-4"
      >
        Genres
      </Link>

      <h1 className="text-md pl-2 pt-8 md:pl-20">Game Library</h1>

      {filteredGames.length === 0 ? (
        <p className="px-4 md:px-20">No games found matching "{searchTerm}".</p>
      ) : (
        <div className="grid grid-cols-1 gap-10 px-2 py-6 sm:grid-cols-2 md:grid-cols-3 md:px-20">
          {filteredGames.map((game) => (
            <GameCard
              key={game.id}
              game={game}
              isFavourite={isFavourite}
              toggleFavourite={toggleFavourite}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default HomePage;
