import React, { useState } from "react";
import Card from "./Card";
import { ColumnCrudProps } from "../types";

const Column = ({
  title,
  cards,
  columnId,
  onRename,
  onDelete,
  status,
  onAddCard,
  onEditCard,
  onDeleteCard,
}: ColumnCrudProps) => {
  const [isEdit, setIsEdit] = useState(false);
  const [value, setValue] = useState(title);

  const handleSave = () => {
    setIsEdit(false);
    if (!value.trim()) return;
    onRename(columnId, value.trim());
  };

  const handleEdit = () => {
    setValue(title);
    setIsEdit(true);
  };

  return (
    <div className="w-full sm:w-70 lg:w-[320px] bg-slate-100 border border-slate-200 rounded-xl p-3">
      <div className="flex items-center justify-between mb-3">
        {isEdit ? (
          <div className="flex w-full">
            <input
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              autoFocus
              className="border rounded px-2 py-1 flex-1 border-blue-800 focus:outline-none focus:ring-1 focus:ring-blue-800 focus:border-transparent"
            />
            <button className ="bg-blue-500 text-white px-3 py-1.5 rounded-l border border-slate-300 hover:bg-white hover:text-blue-500 hover:border-blue-500 transition-colors duration-300" onClick={handleSave}>Save</button>
          </div>
        ) : (
          <div className="flex justify-between w-full px-3">
            <h3 className="font-bold text-slate-800">
              {title} <span className="text-slate-500">({cards.length})</span>
            </h3>
            <div className="flex gap-2">
              <span
                className="font-bold cursor-pointer text-slate-500 hover:text-black transition-all duration-400"
                onClick={handleEdit}
              >
                &#9998;
              </span>
              <span
                className="font-bold cursor-pointer text-slate-500 hover:text-black transition-all duration-400"
                onClick={() => onDelete(columnId)}
              >
                &#128473;
              </span>
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-4 justify-start">
        {cards.map((card) => (
          <Card
            key={card.id}
            {...card}
            onEdit={onEditCard}
            onDelete={onDeleteCard}
          />
        ))}

        <div className="flex items-center justify-center">
          <button
            className="w-60 bg-blue-500 text-white px-3 py-1.5 rounded-lg border border-slate-300 hover:bg-white hover:text-blue-500 hover:border-blue-500 transition-colors duration-300"
            onClick={() => onAddCard(status)}
          >
            Add Card
          </button>
        </div>
      </div>
    </div>
  );
};

export default Column;
