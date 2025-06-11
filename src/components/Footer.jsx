import { Link } from 'react-router-dom';
import LevelJoy from '../assets/gamingjoystick.png';

function Footer() {
  return (
    <footer className="h-56 bg-[#2E2D2D]">
      <div className="px-4 pt-10 md:px-20">
        <img src={LevelJoy} alt="gaming joystick" className="h-full w-40" />
      </div>

      <p className="pl-4 pt-32 pt-4 text-sm md:pl-20">
        Icon from{' '}
        <Link className="text-gray-600 text-sm underline" to="https://icons8.com/">
          Icons8
        </Link>
      </p>
    </footer>
  );
}

export default Footer;
