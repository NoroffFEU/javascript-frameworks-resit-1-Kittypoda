import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useFavourites } from '../hooks/useFavourites';
import { FaHeart } from 'react-icons/fa';

function GameDetails() {
  const { id } = useParams();
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { toggleFavourite, isFavourite } = useFavourites();

  useEffect(() => {
    async function fetchGame() {
      try {
        const response = await fetch(`https://v2.api.noroff.dev/old-games/${id}`);
        if (!response.ok) throw new Error('Failed to fetch game details.');
        const data = await response.json();
        setGame(data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchGame();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!game) return <p>Game not found.</p>;

  return (
    <div className="relative flex flex-col justify-center p-4 md:px-20 lg:px-56">
      <div className="relative mb-2 aspect-[4/3] w-full max-w-[600px] shadow-solid">
        <img
          src={game.image.url}
          alt={game.image.alt}
          className="h-full w-full rounded-xl object-cover"
        />

        <button
          onClick={(e) => {
            e.preventDefault();
            toggleFavourite(game.id);
          }}
          className="absolute bottom-4 right-4 rounded border border-yellow bg-gray p-2 text-4xl text-xl shadow-btnsolid"
          aria-label={`Toggle favourite for ${game.name}`}
        >
          {isFavourite(game.id) ? (
            <FaHeart className="text-pink" />
          ) : (
            <FaHeart className="text-yellow hover:text-pink" />
          )}
        </button>
      </div>

      <h1 className="mb-2 pt-6 font-press text-xl">{game.name}</h1>
      <p className="">
        <strong>Year Released:</strong> {game.released}
      </p>
      <p className="mb-2">
        <strong>Genre:</strong> {game.genre.join(', ')}
      </p>
      <p className="mb-4 max-w-[700px]">
        <strong>Description:</strong> {game.description}
      </p>

      <Link
        to="/home"
        className="mb-20 mt-4 inline-block w-32 rounded border-2 border-purple bg-yellow px-4 py-2 text-sm text-black shadow-btnsolid hover:bg-pink"
      >
        Back to Home
      </Link>
    </div>
  );
}

export default GameDetails;
