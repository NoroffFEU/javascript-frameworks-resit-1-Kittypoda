import { useEffect, useState } from 'react';
import { useFavourites } from '../hooks/useFavourites';
import GameCard from '../components/GameCard';

function GenrePage() {
  const [games, setGames] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const { toggleFavourite, isFavourite } = useFavourites();

  useEffect(() => {
    async function fetchGames() {
      try {
        const response = await fetch('https://v2.api.noroff.dev/old-games');
        if (!response.ok) throw new Error('API call failed');
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

  const allGenres = [...new Set(games.flatMap((game) => game.genre))];

  const filteredGames = selectedGenre
    ? games.filter((game) => game.genre.includes(selectedGenre))
    : games;

  if (loading) return <p>Loading genres...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="px-4 pb-20 pt-10 md:px-20">
      <h1 className="mb-4 text-xl">Browse by Genre</h1>

      <div className="mb-6 flex flex-wrap gap-3">
        {allGenres.map((genre) => (
          <button
            key={genre}
            onClick={() => setSelectedGenre(genre)}
            className={`rounded border-2 border-purple px-3 py-2 text-black shadow-btnsolid ${
              selectedGenre === genre ? 'bg-pink' : 'bg-yellow hover:bg-pink'
            }`}
          >
            {genre}
          </button>
        ))}
        {selectedGenre && (
          <button
            onClick={() => setSelectedGenre(null)}
            className="rounded border border-yellow bg-gray px-3 py-1 hover:bg-pink"
          >
            Clear Filter
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {filteredGames.map((game) => (
          <GameCard
            key={game.id}
            game={game}
            isFavourite={isFavourite}
            toggleFavourite={toggleFavourite}
          />
        ))}
      </div>
    </div>
  );
}

export default GenrePage;
