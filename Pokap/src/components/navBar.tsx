import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const hideBackButton =
    location.pathname === "/" || location.pathname === "/home";

  return (
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-4 sm:p-6 gap-4">

      {/* IZQUIERDA */}
      <div className="flex justify-start">
        {!hideBackButton && (
          <button
            onClick={() => navigate("/home")}
            className="bg-white px-3 py-2 sm:px-4 rounded-full shadow hover:bg-gray-200 transition text-sm sm:text-base"
          >
            ← Volver
          </button>
        )}
      </div>

      {/* DERECHA */}
      <div className="flex flex-wrap justify-center sm:justify-end gap-2 sm:gap-4">

        {/* Favoritos */}
        <button
          onClick={() => navigate("/favorites")}
          className="flex items-center gap-1 sm:gap-2 bg-red-500 text-white px-3 sm:px-5 py-2 rounded-full hover:bg-red-600 transition text-sm sm:text-base"
        >
          ⭐ <span className="hidden sm:inline">Favoritos</span>
        </button>

        {/* Formulario */}
        <button
          onClick={() => navigate("/form")}
          className="bg-red-500 text-white px-3 sm:px-5 py-2 rounded-full hover:bg-red-600 transition text-sm sm:text-base"
        >
          <span className="hidden sm:inline">Formulario</span>
          <span className="sm:hidden">📄</span>
        </button>

        {/* Usuario */}
        <button className="bg-red-500 text-white px-3 sm:px-4 py-2 rounded-full hover:bg-red-600 transition">
          👤
        </button>

      </div>
    </div>
  );
};

export default Navbar;
