type Props = {
  active: boolean;
  onClick: (e: React.MouseEvent) => void;
};

const FavoriteStar = ({ active, onClick }: Props) => {
  return (
    <svg
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={active ? "#facc15" : "none"}
      stroke="#facc15"
      strokeWidth="2"
      className="w-8 h-8 cursor-pointer transition transform hover:scale-125">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.036 6.26a1 1 0 00.95.69h6.588c.969 0 1.371 1.24.588 1.81l-5.33 3.873a1 1 0 00-.364 1.118l2.036 6.26c.3.921-.755 1.688-1.54 1.118l-5.33-3.873a1 1 0 00-1.176 0l-5.33 3.873c-.784.57-1.838-.197-1.539-1.118l2.036-6.26a1 1 0 00-.364-1.118L2.34 11.687c-.783-.57-.38-1.81.588-1.81h6.588a1 1 0 00.95-.69l2.036-6.26z"/>
    </svg>
  );
};

export default FavoriteStar;
