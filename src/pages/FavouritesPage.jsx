import { useEffect, useState } from "react";
import { useFavourites } from "../hooks/useFavourites";
import GameCard from "../components/GameCard";

function FavouritesPage() {
  const { favourites, toggleFavourite, isFavourite } = useFavourites();
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchAllGames() {
      try {
        const response = await fetch("https://v2.api.noroff.dev/old-games");
        if (!response.ok) throw new Error("Failed to fetch games");
        const data = await response.json();

        const filtered = data.data.filter((game) => favourites.includes(game.id));
        setGames(filtered);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchAllGames();
  }, [favourites]);

  if (loading) return <p className="px-4 md:px-20">Loading favourites...</p>;
  if (error) return <p className="px-4 md:px-20">Error: {error}</p>;
  if (games.length === 0) return <p className="px-4 md:px-20">You haven't added any favourites yet.</p>;

  return (
    <div className="min-h-[800px]">
    <div className="px-4 md:px-20 pt-10 pb-20">
      <h1 className="text-xl mb-4">My Favourites</h1>
      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {games.map((game) => (
  <GameCard
    key={game.id}
    game={game}
    isFavourite={isFavourite}
    toggleFavourite={toggleFavourite}
  />
))}

      </div>
    </div>
    </div>
  );
}

export default FavouritesPage;
