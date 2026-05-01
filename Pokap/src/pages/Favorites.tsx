import { useEffect, useState } from "react";
import Navbar from "../components/navBar";
import PokemonCard from "../components/pokemonCard";
import { getFavorites } from "../utils/favorites";

const Favorites = () => {
  const [pokemon, setPokemon] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const favs = getFavorites();

    const fetchFavs = async () => {
      try {
        const data = await Promise.all(
          favs.map(async (name) => {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
            return res.json();
          })
        );

        const formatted = data.map((p) => ({
          name: p.name,
          url: `https://pokeapi.co/api/v2/pokemon/${p.id}/`,
        }));

        setPokemon(formatted);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchFavs();
  }, []);

  if (loading)
    return <p className="text-center mt-10">🔄 Cargando...</p>;

  if (error)
    return (
      <p className="text-center mt-10 text-red-500">
        ❌ Error
      </p>
    );

  return (
    <div className="min-h-screen flex flex-col bg-gray-300">
      <Navbar />

      <h1 className="text-2xl md:text-4xl text-center mt-6 font-bold px-4">
        Tus Pokémon Favoritos ⭐
      </h1>

      <div className="bg-red-500 mt-6 md:mt-10 rounded-t-[40px] w-full flex-1">
        <div className="flex flex-col items-center w-full min-h-full">

          {pokemon.length === 0 ? (
            <p className="text-white text-base md:text-lg text-center opacity-80 leading-relaxed px-4 mt-10">
              ⭐ Aún no tienes favoritos
              <br />
              <span className="text-sm">
                ¡Explora y agrega algunos!
              </span>
            </p>
          ) : (
            <div
              className="
              grid 
              grid-cols-1 
              sm:grid-cols-2 
              md:grid-cols-3 
              lg:grid-cols-4 
              xl:grid-cols-5
              gap-4 sm:gap-6 md:gap-8
              p-4 sm:p-6 md:p-10
              w-full
              pb-16">
              {pokemon.map((p) => (
                <PokemonCard key={p.name} name={p.name} url={p.url} />
              ))}
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default Favorites;
