import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import LevelLogo from "../assets/logo.png";

function Header() {
  return (
    <header className="flex items-center justify-between px-4 md:px-20 pt-8 mb-6">
      <Link to="/" className="text-2xl font-bold">
        <img src={LevelLogo}
        alt="Level up Lounge logo" 
        className="md:w-52 w-40 h-auto"
        />
      </Link>

      <Link
        to="/favourites"
        className="text-4xl text-yellow transition"
        aria-label="View favourites"
      >
        <FaHeart />
      </Link>
    </header>
  );
}

export default Header;

