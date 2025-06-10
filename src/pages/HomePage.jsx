import { useEffect, useState } from "react";
import { useFavourites } from "../hooks/useFavourites";
import GameCard from "../components/GameCard";

function HomePage() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState(""); 

  const { toggleFavourite, isFavourite } = useFavourites();

  useEffect(() => {
    async function fetchGames() {
      try {
        const response = await fetch("https://v2.api.noroff.dev/old-games");
        if (!response.ok) throw new Error("Something went wrong with the API call");
        const data = await response.json();
        setGames(data.data); 
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchGames();
  }, []);

  const filteredGames = games.filter((game) => {
    const nameMatch = game.name.toLowerCase().includes(searchTerm.toLowerCase());
    const yearMatch = game.released.includes(searchTerm);
    return nameMatch || yearMatch;
  });

  if (loading) return <p>Loading games...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="p-4">
      

      <input
        type="text"
        placeholder="Search games.."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-2 md:ml-20 p-3 border placeholder-yellow border-yellow focus:outline-none focus:ring-0 focus:border-pink shadow-btnsolid text-sm rounded w-full max-w-md bg-gray"
      />

<h1 className="text-md pl-2  md:pl-20 pt-8">Game Library</h1>

      {filteredGames.length === 0 ? (
        <p>No games found matching "{searchTerm}".</p>
      ) : (
        <div className=" px-2 md:px-20 py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {filteredGames.map((game) => (
            <GameCard
              key={game.id}
              game={game}
              isFavourite={isFavourite}
              toggleFavourite={toggleFavourite}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default HomePage;



