import { useNavigate } from "react-router-dom";
import { isFavorite, toggleFavorite } from "../utils/favorites";
import { useState, useRef } from "react";
import FavoriteStar from "./favoriteStar";
import toast from "react-hot-toast";
import ConfirmModal from "./confirmModal";

type Props = {
  name: string;
  url: string;
};

const PokemonCard = ({ name, url }: Props) => {
  const navigate = useNavigate();
  const id = url.split("/")[6];
  const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
  const [favorite, setFavorite] = useState(isFavorite(name));
  const dialogRef = useRef<HTMLDialogElement>(null);
  const handleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation(); 
    if (favorite) {
      dialogRef.current?.showModal();
    } else {
      const newState = toggleFavorite(name);
      setFavorite(newState);
      toast.success("⭐ Añadido a favoritos");
    }
  };
  const handleRemove = () => {
    toggleFavorite(name);
    setFavorite(false);
    toast("❌ Eliminado de favoritos");
  };

  return (
    <article
      onClick={() => navigate(`/pokemon/${name}`)}
      className="
        relative cursor-pointer 
        bg-white/10 backdrop-blur-md border border-white/20 
        rounded-2xl 
        p-4 sm:p-5 md:p-6
        flex flex-col items-center 
        hover:scale-105 active:scale-95
        transition duration-300 
        shadow-lg
        w-full max-w-[220px] mx-auto
      "
      aria-label={`Tarjeta de Pokémon ${name}`}
    >

      <div className="absolute top-2 right-2 sm:top-3 sm:right-3">
        <FavoriteStar
          active={favorite}
          onClick={handleFavorite}
          aria-label="Agregar o quitar de favoritos"/>
      </div>

      <figure className="flex flex-col items-center">
        <img
          src={image}
          alt={`Imagen de ${name}`}
          className="
            w-20 h-20 
            sm:w-24 sm:h-24 
            md:w-28 md:h-28 
            object-contain"/>
      </figure>

      <header className="text-center">
        <h2 className="
          text-white mt-3 sm:mt-4 
          capitalize font-semibold 
          text-base sm:text-lg md:text-xl">
          {name}
        </h2>

        <p className="
          text-white/70 
          text-xs sm:text-sm 
          mt-1">
          #{id.padStart(3, "0")}
        </p>
      </header>

      <ConfirmModal
        ref={dialogRef}
        message="¿Quitar de favoritos?"
        onConfirm={handleRemove}/>
    </article>
  );
};

export default PokemonCard;
