import { Button } from "@/components/ui/button";

type DeleteModalProps = {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  isLoading: boolean;
};

const DeleteModal = ({
  open,
  onClose,
  onConfirm,
  isLoading,
}: DeleteModalProps) => {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/30"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-white/80 backdrop-blur-md rounded-lg shadow-lg p-6 w-96 text-center animate-fade-in">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Confirm Deletion
        </h2>
        <p className="text-sm text-gray-600 mb-6">
          Are you sure you want to delete this book? This action cannot be
          undone.
        </p>
        <div className="flex justify-center gap-4">
          <Button
            onClick={onConfirm}
            disabled={isLoading}
            className="bg-red-600 hover:bg-red-700 text-white"
          >
            {isLoading ? "Deleting..." : "Yes, Delete"}
          </Button>
          <Button
            variant="outline"
            onClick={onClose}
            className="border-gray-300 hover:bg-gray-100"
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
