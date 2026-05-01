import { useState } from "react";
import Navbar from "../components/navBar";
import ActionGuardModal from "../components/ActionGuardModal";

const Form = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);

  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isValid = name !== "" && isValidEmail && message.length > 5;

  const handleSubmit = () => {
    setShowModal(true);
  };

  const confirmSubmit = () => {
    setShowModal(false);
    alert("Formulario enviado 🚀");
    // aquí puedes hacer tu lógica real (API, etc.)
  };

  return (
    <div className="min-h-screen bg-gray-300 flex flex-col">
      <Navbar />

      <div className="flex justify-center items-center flex-1">
        <div className="bg-white/20 backdrop-blur-md p-8 rounded-2xl shadow-xl w-[350px]">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Formulario
          </h2>

          <input
            type="text"
            placeholder="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full mb-3 px-3 py-2 rounded"
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mb-3 px-3 py-2 rounded"
          />

          {!isValidEmail && email && (
            <p className="text-red-500 text-sm mb-2">
              Email inválido
            </p>
          )}

          <textarea
            placeholder="Mensaje"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full mb-3 px-3 py-2 rounded"
          />

          <button
            onClick={handleSubmit}
            disabled={!isValid}
            className={`w-full py-2 rounded font-semibold transition
              ${isValid
                ? "bg-red-500 text-white hover:bg-red-600"
                : "bg-gray-400 text-gray-200 cursor-not-allowed"
              }`}
          >
            Enviar
          </button>
        </div>
      </div>

      {/* Modal */}
      <ActionGuardModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={confirmSubmit}
      />
    </div>
  );
};

export default Form;
