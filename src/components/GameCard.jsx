import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';

function GameCard({ game, isFavourite, toggleFavourite }) {
  return (
    <div className="">
      <div className="relative">
        <Link to={`/games/${game.id}`} className="block">
          <img
            src={game.image.url}
            alt={game.image.alt}
            className="mb-2 h-80 w-full rounded-xl object-cover shadow-solid"
          />
        </Link>

        <button
          onClick={(e) => {
            e.preventDefault();
            toggleFavourite(game.id);
          }}
          className="absolute bottom-4 right-4 rounded border border-yellow bg-gray p-2 text-xl shadow-btnsolid"
          aria-label={`Toggle favourite for ${game.name}`}
        >
          {isFavourite(game.id) ? (
            <FaHeart className="text-pink" />
          ) : (
            <FaHeart className="text-yellow hover:text-pink" />
          )}
        </button>
      </div>

      <h2 className="pt-4 font-press">{game.name}</h2>
      <p>Year: {game.released}</p>
      <p>Genre: {game.genre.join(', ')}</p>

      <Link
        to={`/games/${game.id}`}
        className="mt-4 inline-block rounded border-2 border-purple bg-yellow px-4 py-2 text-sm text-black shadow-btnsolid transition hover:bg-pink"
      >
        Read more
      </Link>
    </div>
  );
}

export default GameCard;
