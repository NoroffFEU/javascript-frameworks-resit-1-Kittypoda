import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-3 bg-white shadow-md mb-6">
      <Link to="/" className="text-2xl font-bold">
        🎮 Level up Lounge
      </Link>

      <button
        className="text-2xl text-gray-600 hover:text-pink-500 transition"
        aria-label="View favourites"
      >
        <FaHeart />
      </button>
    </header>
  );
}

export default Header;
