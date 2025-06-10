import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useFavourites } from "../hooks/useFavourites";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import GameCard from "../components/GameCard";

function GameDetails() {
  const { id } = useParams();
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { toggleFavourite, isFavourite } = useFavourites();

  useEffect(() => {
    async function fetchGame() {
      try {
        const response = await fetch(`https://v2.api.noroff.dev/old-games/${id}`);
        if (!response.ok) throw new Error("Failed to fetch game details.");
        const data = await response.json();
        setGame(data.data); // viktig: data er inni "data"-feltet
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
    <div className="p-4 relative">
      <h1 className="text-3xl font-bold mb-2">{game.name}</h1>

      <button
        onClick={() => toggleFavourite(game.id)}
        className="absolute top-4 right-4 text-3xl"
        aria-label={`Toggle favourite for ${game.name}`}
      >
        {isFavourite(game.id) ? (
          <FaHeart className="text-pink-400" />
        ) : (
          <FaRegHeart className="text-gray-400" />
        )}
      </button>

      <img
        src={game.image.url}
        alt={game.image.alt}
        className="w-full max-w-md mb-4 rounded"
      />

      <p className="mb-2"><strong>Year Released:</strong> {game.released}</p>
      <p className="mb-2"><strong>Genre:</strong> {game.genre.join(", ")}</p>
      <p className="mb-4"><strong>Description:</strong> {game.description}</p>

      <Link
        to="/"
        className="inline-block mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        ← Back to Home
      </Link>
    </div>
  );
}

export default GameDetails;

