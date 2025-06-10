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

  if (loading) return <p>Loading favourites...</p>;
  if (error) return <p>Error: {error}</p>;
  if (games.length === 0) return <p>You haven't added any favourites yet.</p>;

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">My Favourites</h1>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
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
  );
}

export default FavouritesPage;
