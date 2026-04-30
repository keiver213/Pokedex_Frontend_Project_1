type Props = {
  value: string;
  onChange: (value: string) => void;
};

const SearchBar = ({ value, onChange }: Props) => {
  return (
    <div className="flex justify-center mt-4 px-4">
      <div className="
        flex 
        bg-gray-200 
        rounded-full 
        overflow-hidden 
        w-full 
        max-w-md">
        
        <input
          type="text"
          placeholder="Buscar Pokemon..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="
            flex-1 
            px-3 sm:px-4 
            py-2 
            outline-none 
            bg-transparent
            text-sm sm:text-base"/>

        <button className="
          bg-red-500 
          text-white 
          px-4 sm:px-6 
          text-sm sm:text-base
          whitespace-nowrap">
          Buscar
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
