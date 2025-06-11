import { Link, useLocation } from "react-router-dom"; 
import { FaHeart } from "react-icons/fa";
import LevelLogo from "../assets/logo.png";

function Header() {
  const location = useLocation(); 

  if (location.pathname === "/") return null; 

  return (
    <header className="flex items-center justify-between px-4 md:px-20 pt-8 mb-6">
      <Link to="/home" className="text-2xl font-bold">
        <img
          src={LevelLogo}
          alt="Level up Lounge logo"
          className="md:w-52 w-40 h-auto"
        />
      </Link>
      <button className="bg-gray p-2 rounded border border-yellow shadow-btnsolid">
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


