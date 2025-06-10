import { Link } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";

function GameCard({ game, isFavourite, toggleFavourite }) {
  return (
    <div className="relative bg-white p-4 rounded shadow hover:shadow-lg transition">
      <button
        onClick={(e) => {
          e.preventDefault();
          toggleFavourite(game.id);
        }}
        className="absolute top-2 right-2 text-2xl"
        aria-label={`Toggle favourite for ${game.name}`}
      >
        {isFavourite(game.id) ? (
          <FaHeart className="text-pink-400" />
        ) : (
          <FaRegHeart className="text-gray-400" />
        )}
      </button>

      <Link to={`/games/${game.id}`} className="block">
        <img
          src={game.image.url}
          alt={game.image.alt}
          className="w-full h-48 object-cover mb-2 rounded"
        />
        <h2 className="text-xl font-semibold">{game.name}</h2>
        <p>Year: {game.released}</p>
        <p>Genre: {game.genre.join(", ")}</p>
      </Link>
    </div>
  );
}

export default GameCard;
