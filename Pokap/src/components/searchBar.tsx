type Props = {
  value: string;
  onChange: (value: string) => void;
  letter: string;
  setLetter: (letter: string) => void;
};

const SearchBar = ({
  value,
  onChange,
  letter,
  setLetter,
}: Props) => {
  return (
    <div className="flex flex-col items-center mt-6 px-4 gap-4">

      {/* 🔎 Buscador */}
      <div className="flex bg-white shadow-md rounded-full overflow-hidden w-full max-w-md">
        <input
          type="text"
          placeholder="Buscar Pokémon..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="flex-1 px-4 py-2 outline-none text-sm sm:text-base"
        />

        <button className="bg-red-500 text-white px-5 text-sm sm:text-base hover:bg-red-600 transition">
          Buscar
        </button>
      </div>

      {/* 🔤 Filtro estilizado */}
      <div className="w-full max-w-md">
        <p className="text-sm text-gray-600 mb-2 text-center">
          Filtrar por inicial
        </p>

        <div className="
          flex gap-2 overflow-x-auto 
          bg-white/60 backdrop-blur-md 
          p-3 rounded-2xl shadow-inner
          scrollbar-thin scrollbar-thumb-gray-300
        ">
          {/* Botón TODOS */}
          <button
            onClick={() => setLetter("all")}
            className={`
              px-4 py-1 rounded-full text-sm font-medium whitespace-nowrap transition
              ${
                letter === "all"
                  ? "bg-red-500 text-white shadow-md scale-105"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }
            `}
          >
            Todos
          </button>

          {/* Letras */}
          {"abcdefghijklmnopqrstuvwxyz".split("").map((l) => (
            <button
              key={l}
              onClick={() => setLetter(l)}
              className={`
                px-3 py-1 rounded-full text-sm uppercase font-medium whitespace-nowrap transition
                ${
                  letter === l
                    ? "bg-red-500 text-white shadow-md scale-105"
                    : "bg-white text-gray-600 hover:bg-gray-100"
                }
              `}
            >
              {l}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
