import { Button } from "../ui/button";

interface DeleteModalProps {
  onClose: () => void;
  onConfirm: () => void;
  nodeName: string;
}
function DeleteNodeModal({ onClose, onConfirm, nodeName }: DeleteModalProps) {
  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-gray-800 rounded-lg p-6 w-96 "
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-4xl font-semibold text-white mb-4">
          Confirm Delete
        </h2>
        <p>
          Are you sure you want to delete "{nodeName}" and all its children?
        </p>
        <div className="flex gap-2 justify-end mt-4">
          <Button
            className="cursor-pointer"
            onClick={onClose}
            variant="secondary"
          >
            Cancel
          </Button>
          <Button
            className="cursor-pointer"
            onClick={onConfirm}
            variant="destructive"
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
}

export default DeleteNodeModal;
