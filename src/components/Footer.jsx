import { Link } from "react-router-dom";
import LevelJoy from "../assets/gamingjoystick.png";

function Footer() {
  return (
    <footer className="bg-[#2E2D2D] h-56">
      
      <div className=" px-4 md:px-20 pt-10">
        <img src={LevelJoy} 
        alt="gaming joystick"
        className="w-40 h-full" />
      </div>

<p className="text-sm pt-4 pl-4 md:pl-20 pt-32">Icon from <Link className="text-gray-600 text-sm underline" to="https://icons8.com/">Icons8</Link></p>
  
    </footer>
  );
}

export default Footer;
