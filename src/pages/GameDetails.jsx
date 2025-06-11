import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useFavourites } from "../hooks/useFavourites";
import { FaHeart } from "react-icons/fa";

function GameDetails() {
  const { id } = useParams();
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { toggleFavourite, isFavourite } = useFavourites();

  useEffect(() => {
    async function fetchGame() {
      try {
        const response = await fetch(
          `https://v2.api.noroff.dev/old-games/${id}`
        );
        if (!response.ok) throw new Error("Failed to fetch game details.");
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
    <div className="p-4 relative flex flex-col justify-center md:px-20 lg:px-56">

      <div className="relative w-full max-w-[600px] aspect-[4/3] mb-2 shadow-solid">
  <img
    src={game.image.url}
    alt={game.image.alt}
    className="w-full h-full object-cover rounded-xl"
  />

  <button
    onClick={(e) => {
      e.preventDefault();
      toggleFavourite(game.id);
    }}
    className="absolute bottom-4 right-4 text-3xl"
    aria-label={`Toggle favourite for ${game.name}`}
  >
    {isFavourite(game.id) ? (
      <FaHeart className="text-pink" />
    ) : (
      <FaHeart className="text-yellow hover:text-pink" />
    )}
  </button>
</div>

<h1 className="text-xl font-press mb-2 pt-6">{game.name}</h1>
      <p className="">
        <strong>Year Released:</strong> {game.released}
      </p>
      <p className="mb-2">
        <strong>Genre:</strong> {game.genre.join(", ")}
      </p>
      <p className="mb-4 max-w-[700px]">
        <strong>Description:</strong> {game.description}
      </p>

      <Link
        to="/home"
        className="inline-block mt-4 mb-20 border-2 w-32 rounded border-purple px-4 py-2 bg-yellow text-black text-sm shadow-btnsolid hover:bg-pink "
      >
        Back to Home
      </Link>
    </div>
  );
}

export default GameDetails;
