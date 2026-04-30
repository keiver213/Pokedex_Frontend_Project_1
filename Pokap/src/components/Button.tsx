type Props = {
  text: string;
  onClick: () => void;
  disabled: boolean;
};

const Button = ({ text, onClick, disabled }: Props) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-full py-2 rounded-md font-semibold transition
        ${
          disabled
            ? "bg-gray-400 cursor-not-allowed text-gray-200"
            : "bg-red-600 hover:bg-red-700 text-white"
        }`}>
      {text}
    </button>
  );
};

export default Button;
