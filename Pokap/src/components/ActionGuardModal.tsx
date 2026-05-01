import React from "react";

type ActionGuardModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
};

const ActionGuardModal = ({
  isOpen,
  onClose,
  onConfirm,
}: ActionGuardModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
      <div className="bg-white rounded-xl p-6 w-[360px] shadow-xl text-center">
        
        <h2 className="text-xl font-bold mb-2 text-red-600">
          ⚠️ Confirmación
        </h2>

        <p className="text-gray-700 mb-2">
          Estás a punto de enviar tu información.
        </p>

        <p className="text-sm text-red-500 mb-4">
          Si cancelas ahora, podrías perder los datos ingresados.
        </p>

        {/* 👇 AQUÍ está el truco: orden invertido */}
        <div className="flex flex-col gap-2">
          
          {/* Botón cancelar primero (posición dominante por hábito) */}
          <button
            onClick={onClose}
            className="w-full py-2 rounded font-semibold bg-red-500 text-white hover:bg-red-600"
          >
            Cancelar
          </button>

          {/* Botón real de acción menos destacado */}
          <button
            onClick={onConfirm}
            className="w-full py-2 rounded text-sm text-gray-500 hover:underline"
          >
            Sí, enviar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActionGuardModal;

/*
🧠 DARK PATTERN APLICADO:

1. Inversión de acciones (primary vs secondary):
   - "Cancelar" se presenta como botón principal (rojo, grande).
   - "Enviar" se degrada visualmente (texto pequeño).

2. Memory muscle trap:
   - Usuarios suelen hacer clic en el primer botón → aquí los lleva a cancelar.

3. Aversión a la pérdida:
   - Mensaje sugiere pérdida de datos si cancelan.

👉 Resultado:
Usuarios pueden cancelar sin darse cuenta o dudar más al enviar.
*/
