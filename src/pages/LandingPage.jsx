import { useNavigate } from 'react-router-dom';
import LevelLogo from '../assets/logo.png';
import LevelJoy from '../assets/gamingjoystick.png';

export default function LandingPage() {
  const navigate = useNavigate();

  function handleStart() {
    navigate('/home');
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#1E1E1E] to-[#565656] px-4 py-10 text-center">
      <div className="w-full max-w-[500px]">
        <img src={LevelLogo} alt="Level up Lounge logo" className="h-auto w-full" />
      </div>

      <div className="mt-6 w-full max-w-[500px]">
        <img src={LevelJoy} alt="Gaming joystick" className="h-auto w-full" />
      </div>

      <p className="my-8 text-lg md:text-xl">Ready to press start?</p>

      <button
        onClick={handleStart}
        className="rounded border-2 border-purple bg-yellow px-6 py-3 text-lg font-bold text-black shadow-btnsolid transition hover:bg-pink"
      >
        GAME ON
      </button>
    </div>
  );
}
