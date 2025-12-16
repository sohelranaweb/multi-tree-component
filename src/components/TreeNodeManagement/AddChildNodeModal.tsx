"use client";

import { useState } from "react";
import { Button } from "../ui/button";

interface AddChildModalProps {
  onClose: () => void;
  onAdd: (label: string) => void;
}
function AddChildNodeModal({ onClose, onAdd }: AddChildModalProps) {
  const [label, setLabel] = useState("");

  //   handle add Node
  const handleSubmit = () => {
    if (label.trim()) {
      onAdd(label.trim());
      onClose();
    }
  };

  //   Keyboard Shortcut
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };
  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-gray-800 rounded-lg p-6 w-96"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-semibold text-white mb-4">
          Add Child Node
        </h2>
        <div>
          <label>Node Label</label>
          <input
            type="text"
            value={label}
            onChange={(e) => setLabel(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Enter label"
            className="w-full px-3 py-2 mt-2 bg-gray-700 text-white rounded border border-gray-600 focus:outline-none focus:border-blue-500"
            autoFocus
          />
          <div className="flex gap-2 mt-4 justify-end">
            <Button onClick={onClose} variant="destructive">
              Cancel
            </Button>
            <Button
              onClick={handleSubmit}
              disabled={!label.trim()}
              variant="secondary"
            >
              Add
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddChildNodeModal;
