import { Link, useLocation } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import LevelLogo from '../assets/logo.png';

function Header() {
  const location = useLocation();

  if (location.pathname === '/') return null;

  return (
    <header className="mb-6 flex items-center justify-between px-4 pt-8 md:px-20">
      <Link to="/home" className="text-2xl font-bold">
        <img src={LevelLogo} alt="Level up Lounge logo" className="h-auto w-40 md:w-52" />
      </Link>
      <button className="rounded border border-yellow bg-gray p-2 shadow-btnsolid">
        <Link
          to="/favourites"
          className="text-2xl text-pink transition"
          aria-label="View favourites"
        >
          <FaHeart />
        </Link>
      </button>
    </header>
  );
}

export default Header;
