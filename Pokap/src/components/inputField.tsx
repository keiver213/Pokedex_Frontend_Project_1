type Props = {
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
};

const InputField = ({ label, type, placeholder, value, onChange, error }: Props) => {
  return (
    <div className="mb-4">
      <label className="text-sm">{label}</label>

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full mt-1 px-3 py-2 rounded-md bg-white/80 text-black outline-none"/>
      {error && (
        <p className="text-red-300 text-xs mt-1">
          {error}
        </p>
      )}
    </div>
  );
};

export default InputField;
