import React, { useEffect, useState } from "react";
import { NewCardModalProps } from "../../types";

const NewCardModal: React.FC<NewCardModalProps> = ({
  isOpen,
  onClose,
  onAdd,
}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tagsText, setTags] = useState("");
  const [dueDate, setDueDate] = useState("");

  useEffect(() => {
    if (isOpen) {
      setTitle("");
      setDescription("");
      setTags("");
      setDueDate("");
    }
  }, [isOpen]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    const newTitle = title.trim();
    if (!newTitle) return;

    const newDescription = description.trim();
    const tags = tagsText
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);

    const newDueDate = dueDate.trim();

    onAdd({
      title: newTitle,
      description: newDescription,
      tags,
      dueDate: newDueDate,
    });

    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed z-[1000] inset-0 bg-black/40 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-md rounded-xl p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-xl font-bold">New Card</h2>
          <button onClick={onClose} className="text-xl">
            x
          </button>
        </div>

        <form className="flex flex-col gap-3" onSubmit={handleAdd}>
          <input
            type="text"
            value={title}
            placeholder="Card title"
            className="border-blue-800 border-2 rounded-lg px-3 py-2 w-full"
            onChange={(e) => setTitle(e.target.value)}
            autoFocus
          />

          <textarea
            value={description}
            placeholder="Description..."
            className="border-blue-800 border-2 rounded-lg px-3 py-2 w-full"
            onChange={(e) => setDescription(e.target.value)}
            rows={3}
          />

          <input
            type="text"
            value={tagsText}
            placeholder="Tags (comma separated), e.g. web, app, mobile"
            className="border-blue-800 border-2 rounded-lg px-3 py-2 w-full"
            onChange={(e) => setTags(e.target.value)}
          />

          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="border-blue-800 border-2 rounded-lg px-3 py-2 w-full"
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

export default NewCardModal;
