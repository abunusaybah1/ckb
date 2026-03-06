import React, { useEffect, useState } from "react";
import { NewBoardModalProps } from "@/app/types/index";

const NewBoardModal: React.FC<NewBoardModalProps> = ({
  isOpen,
  onClose,
  onAdd,
}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (isOpen) {
      setTitle("");
      setDescription("");
    }
  }, [isOpen]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    const newTitle = title.trim();
    const newDescription = description.trim();

    if (!newTitle) return;

    onAdd(newTitle, newDescription);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed z-1000 inset-0 bg-black/40 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-md rounded-xl p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-xl font-bold">New Board</h2>
          <button onClick={onClose} className="text-xl">
            x
          </button>
        </div>

        <form className="flex flex-col gap-3" onSubmit={handleAdd}>
          <input
            type="text"
            value={title}
            placeholder="Board title"
            className="border-blue-800 border-2 rounded-lg px-3 py-2 w-full"
            onChange={(e) => setTitle(e.target.value)}
            autoFocus
          />

          <textarea
            value={description}
            placeholder="Board description"
            className="border-blue-800 border-2 rounded-lg px-3 py-2 w-full"
            onChange={(e) => setDescription(e.target.value)}
            rows={3}
          />

          <input
            type="submit"
            value="Add"
            className="bg-blue-800 text-white px-4 py-2 rounded-lg cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
};

export default NewBoardModal;
