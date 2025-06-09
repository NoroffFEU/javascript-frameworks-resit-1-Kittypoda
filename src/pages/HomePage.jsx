import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HomePage() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchGames() {
      try {
        const response = await fetch("https://api.noroff.dev/api/v1/old-games");
        if (!response.ok) throw new Error("Something went wrong with the API call");
        const data = await response.json();
        setGames(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchGames();
  }, []);

  if (loading) return <p>Loading games...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Game Library</h1>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {games.map((game) => (
          <Link
            to={`/games/${game.id}`}
            key={game.id}
            className="bg-white p-4 rounded shadow hover:shadow-lg transition block"
          >
            <img
              src={game.image}
              alt={game.title}
              className="w-full h-48 object-cover mb-2 rounded"
            />
            <h2 className="text-xl font-semibold">{game.title}</h2>
            <p>Year: {game.released}</p>
            <p>Genre: {game.genre}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
