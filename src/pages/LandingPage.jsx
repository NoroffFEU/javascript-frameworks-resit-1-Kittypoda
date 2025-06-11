import { useNavigate } from "react-router-dom";
import LevelLogo from "../assets/logo.png";
import LevelJoy from "../assets/gamingjoystick.png";

export default function LandingPage() {
  const navigate = useNavigate();

  function handleStart() {
    navigate("/home");
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#1E1E1E] to-[#565656] text-center px-4 py-10">
      
      <div className="w-full max-w-[500px]">
        <img
          src={LevelLogo}
          alt="Level up Lounge logo"
          className="w-full h-auto"
        />
      </div>

      <div className="w-full max-w-[500px] mt-6">
        <img
          src={LevelJoy}
          alt="Gaming joystick"
          className="w-full h-auto"
        />
      </div>

      <p className="text-lg md:text-xl my-8">Ready to press start?</p>

      <button
        onClick={handleStart}
        className="px-6 py-3 bg-yellow text-black font-bold text-lg rounded shadow-btnsolid hover:bg-pink transition border-2 border-purple"
      >
        GAME ON
      </button>
    </div>
  );
}

