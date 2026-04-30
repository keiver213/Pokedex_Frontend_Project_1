import { useNavigate } from "react-router-dom";

const NotFound404 = () => {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-gray-300 flex flex-col">

      <section
        className="flex-1 flex flex-col items-center justify-center text-center px-6"
        aria-label="Página no encontrada"
      >

        <article
          className="
            bg-gradient-to-br from-red-400 to-red-600
            rounded-[30px] sm:rounded-[40px]
            p-8 sm:p-12
            shadow-2xl
            text-white
            max-w-xl w-full">

          <header>
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold mb-4">
              404
            </h1>

            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">
              Pokémon no encontrado
            </h2>
          </header>

          <p className="text-white/80 mb-6">
            Parece que te has perdido en la Pokédex...
            <br />
            Esta ruta no existe.
          </p>

          <nav className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate("/login")}
              className="
                bg-white text-red-500 
                px-6 py-2 rounded-full 
                font-semibold
                hover:bg-gray-200 transition"
              aria-label="Ir al inicio">
              Volver al inicio
            </button>

            <button
              onClick={() => navigate(-1)}
              className="
                bg-white/20 
                px-6 py-2 rounded-full 
                hover:bg-white/30 transition"
              aria-label="Regresar a la página anterior">
              Regresar
            </button>
          </nav>
        </article>
      </section>
    </main>
  );
};

export default NotFound404;
