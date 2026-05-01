import { useEffect, useState } from "react";
import Navbar from "../components/navBar";
import SearchBar from "../components/searchBar";
import PokemonGrid from "../components/pokemonGrid";

type Pokemon = {
  name: string;
  url: string;
};

const Home = () => {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  const [search, setSearch] = useState<string>("");
  const [letter, setLetter] = useState<string>("all");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://pokeapi.co/api/v2/pokemon?limit=1025")
      .then((res) => res.json())
      .then((data) => {
        setPokemon(data.results);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  const filtered = pokemon.filter((p) => {
    const matchesSearch = p.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesLetter =
      letter === "all" || p.name.startsWith(letter);

    return matchesSearch && matchesLetter;
  });

  if (loading)
    return <p className="text-center mt-10">🔄 Cargando...</p>;

  if (error)
    return (
      <p className="text-center mt-10 text-red-500">
        ❌ Error al cargar
      </p>
    );

  return (
    <main className="min-h-screen bg-gray-300">
      <Navbar />

      <header>
        <h1 className="text-center text-3xl sm:text-4xl font-bold mt-4">
          Explora Pokap
        </h1>
      </header>

      <section aria-label="Buscador de Pokémon">
        <SearchBar
          value={search}
          onChange={setSearch}
          letter={letter}
          setLetter={setLetter}
        />
      </section>

      <section
        className="
          bg-red-500 mt-10 
          rounded-t-[30px] sm:rounded-t-[40px] 
          min-h-[60vh] sm:min-h-[70vh]
        "
        aria-label="Lista de Pokémon"
      >
        {filtered.length === 0 ? (
          <p className="text-white text-center mt-10">
            No se encontraron Pokémon
          </p>
        ) : (
          <PokemonGrid pokemon={filtered} />
        )}
      </section>
    </main>
  );
};

export default Home;
