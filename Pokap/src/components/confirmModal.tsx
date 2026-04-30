import { forwardRef } from "react";

type Props = {
    onConfirm: () => void;
    message: string;
};

const ConfirmModal = forwardRef<HTMLDialogElement, Props>(
    ({ onConfirm, message }, ref) => {
        const dialogRef = ref as React.RefObject<HTMLDialogElement>;

        const closeModal = () => {
            dialogRef.current?.close();
        };

        const handleConfirm = () => {
            onConfirm();
            closeModal();
        };

        return (
            <dialog
                ref={dialogRef}
                role="dialog"
                onClick={(e) => e.stopPropagation()}
                aria-modal="true"
                className="
                    fixed top-1/2 left-1/2 
                    -translate-x-1/2 -translate-y-1/2
                    p-0 border-none rounded-xl
                     backdrop:bg-black/50">
                <div
                    className="
                        w-[90vw] max-w-sm
                        p-6
                         bg-white rounded-xl
                        shadow-xl
                        text-center">
                    <p className="mb-6 text-gray-800">{message}</p>
                    <div className="flex justify-center gap-4">
                        <button
                            onClick={handleConfirm}
                            className="px-4 py-2 bg-red-500 text-white rounded">
                            Confirmar
                        </button>

                        <button
                            onClick={closeModal}
                            className="px-4 py-2 bg-gray-200 text-gray-500 rounded">
                            Cancelar
                        </button>
                    </div>
                </div>
            </dialog>
        );
    }
);

export default ConfirmModal;
