import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function GameDetails() {
  const { id } = useParams();
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchGame() {
      try {
        const response = await fetch(`https://api.noroff.dev/api/v1/old-games/${id}`);
        if (!response.ok) throw new Error("Failed to fetch game details.");
        const data = await response.json();
        setGame(data);
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
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">{game.title}</h1>
      <img
        src={game.image}
        alt={game.title}
        className="w-full max-w-md mb-4 rounded"
      />
      <p className="mb-2"><strong>Year Released:</strong> {game.released}</p>
      <p className="mb-2"><strong>Genre:</strong> {game.genre}</p>
      <p className="mb-4"><strong>Description:</strong> {game.description}</p>
    </div>
  );
}

export default GameDetails;
