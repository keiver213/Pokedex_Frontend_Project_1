import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import FavoriteStar from "../components/favoriteStar";
import { isFavorite, toggleFavorite } from "../utils/favorites";
import toast from "react-hot-toast";
import ConfirmModal from "../components/confirmModal";

const PokemonDetail = () => {
    const typeColors: any = {
        fire: "bg-red-500",
        water: "bg-blue-500",
        grass: "bg-green-500",
        electric: "bg-yellow-400 text-black",
        psychic: "bg-pink-500",
        ice: "bg-cyan-300 text-black",
        dragon: "bg-indigo-600",
        dark: "bg-gray-800",
        fairy: "bg-pink-300 text-black",
        normal: "bg-gray-400 text-black",
        fighting: "bg-orange-700",
        flying: "bg-indigo-300 text-black",
        poison: "bg-purple-500",
        ground: "bg-yellow-700",
        rock: "bg-yellow-800",
        bug: "bg-lime-500",
        ghost: "bg-purple-700",
        steel: "bg-gray-500",
    };

    const typeTranslations: any = {
        fire: "Fuego",
        water: "Agua",
        grass: "Planta",
        electric: "Eléctrico",
        psychic: "Psíquico",
        ice: "Hielo",
        dragon: "Dragón",
        dark: "Siniestro",
        fairy: "Hada",
        normal: "Normal",
        fighting: "Lucha",
        flying: "Volador",
        poison: "Veneno",
        ground: "Tierra",
        rock: "Roca",
        bug: "Bicho",
        ghost: "Fantasma",
        steel: "Acero",
    };
    const { name } = useParams();
    const [pokemon, setPokemon] = useState<any>(null);
    const [favorite, setFavorite] = useState(false);
    const dialogRef = useRef<HTMLDialogElement>(null);
    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then(res => res.json())
            .then(data => {
                setPokemon(data);
                setFavorite(isFavorite(data.name));
            });
    }, [name]);

    if (!pokemon)
        return <p className="text-center mt-10">Cargando...</p>;

    const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;
    const handleFavorite = () => {
        if (favorite) {
            dialogRef.current?.showModal(); 
        } else {
            const newState = toggleFavorite(pokemon.name);
            setFavorite(newState);
            toast.success("⭐ Añadido a favoritos");
        }
    };
    const handleRemove = () => {
        toggleFavorite(pokemon.name);
        setFavorite(false);
        toast("❌ Eliminado de favoritos");
    };
    return (
        <main className="min-h-screen bg-gray-300">
            <Navbar />

            <section className="
                bg-gradient-to-br from-red-400 to-red-600 
                m-4 sm:m-6 md:m-10 
                rounded-[30px] md:rounded-[40px] 
                p-4 sm:p-6 md:p-10 
                text-white shadow-2xl">

                <header className="flex justify-between items-center mb-4 sm:mb-6">
                    <h1 className="
                        text-2xl sm:text-3xl md:text-5xl 
                        font-bold capitalize">
                        {pokemon.name}
                    </h1>

                    <FavoriteStar
                        active={favorite}
                        onClick={handleFavorite}
                        aria-label="Agregar o quitar de favoritos"                  />
                </header>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
                    <figure className="flex justify-center">
                        <img
                            src={image}
                            alt={`Imagen de ${pokemon.name}`}
                            className="
                                w-40 sm:w-56 md:w-72 lg:w-80 
                                drop-shadow-2xl
                            "
                        />
                    </figure>
                    <article className="space-y-3 sm:space-y-4">
                        <p className="text-base sm:text-lg">
                            ID: #{pokemon.id.toString().padStart(3, "0")}
                        </p>
                        <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-base sm:text-lg">Tipos:</span>

                            {pokemon.types.map((t: any) => (
                                <span
                                    key={t.type.name}
                                    className={`
                                        px-2 sm:px-3 py-1 
                                        rounded-full 
                                        text-xs sm:text-sm 
                                        font-semibold shadow capitalize 
                                        ${typeColors[t.type.name]}
                                    `}
                                >
                                    {typeTranslations[t.type.name] || t.type.name}
                                </span>
                            ))}
                        </div>
                        <section className="mt-3 sm:mt-4 space-y-2 sm:space-y-3">
                            {pokemon.stats.map((stat: any) => (
                                <div key={stat.stat.name}>

                                    <div className="flex justify-between text-xs sm:text-sm mb-1">
                                        <span className="capitalize">
                                            {stat.stat.name}
                                        </span>
                                        <span>{stat.base_stat}</span>
                                    </div>

                                    <div className="w-full bg-white/30 rounded-full h-2">
                                        <div
                                            className="bg-white h-2 rounded-full transition-all duration-500"
                                            style={{
                                                width: `${Math.min((stat.base_stat / 255) * 100, 100)}%`
                                            }}
                                        ></div>
                                    </div>

                                </div>
                            ))}
                        </section>
                    </article>
                </div>
            </section>
            <ConfirmModal
                ref={dialogRef}
                message="¿Quitar de favoritos?"
                onConfirm={handleRemove}
            />

        </main>
    );
};

export default PokemonDetail;
