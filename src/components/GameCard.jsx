import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

function GameCard({ game, isFavourite, toggleFavourite }) {
  return (
    <div className="">
      <div className="relative">
        <Link to={`/games/${game.id}`} className="block">
          <img
            src={game.image.url}
            alt={game.image.alt}
            className="w-full h-80 object-cover rounded-xl mb-2 shadow-solid"
          />
        </Link>

        <button
          onClick={(e) => {
            e.preventDefault(); 
            toggleFavourite(game.id);
          }}
          className="absolute bottom-2 right-2 text-3xl"
          aria-label={`Toggle favourite for ${game.name}`}
        >
          {isFavourite(game.id) ? (
            <FaHeart className="text-pink" />
          ) : (
            <FaHeart className="text-yellow hover:text-pink" />
          )}
        </button>
      </div>

      <h2 className="text-xl font-semibold pt-4">{game.name}</h2>
      <p>Year: {game.released}</p>
      <p>Genre: {game.genre.join(", ")}</p>

      <Link
        to={`/games/${game.id}`}
        className="inline-block mt-4 border-2 border-purple rounded px-4 py-2 bg-yellow text-black text-sm shadow-btnsolid hover:bg-pink transition"
      >
        Read more
      </Link>
    </div>
  );
}

export default GameCard;



