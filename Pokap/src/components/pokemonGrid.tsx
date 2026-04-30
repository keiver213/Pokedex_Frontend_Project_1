import PokemonCard from "./pokemonCard";

type Props = {
  pokemon: any[];
};

const pokemonGrid = ({ pokemon }: Props) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-10">
      {pokemon.map((p) => (
        <PokemonCard key={p.name} name={p.name} url={p.url} />
      ))}
    </div>
  );
};

export default pokemonGrid;
