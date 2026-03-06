import React from "react";
import { BoardCardProps } from "../types";

const BoardCard = ({
  id,
  title,
  description,
  createdAt,
  onDelete,
}: BoardCardProps) => {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm flex flex-col gap-3">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-bold text-slate-800">{title}</h3>
          <p className="text-sm text-slate-600 mt-1">{description}</p>
        </div>

        <span
          className="font-bold cursor-pointer text-slate-500 hover:text-black transition-all duration-300"
          onClick={() => onDelete(id)}
        >
          &#128473;
        </span>
      </div>

      <div className="text-sm text-slate-500">
        Created: <span className="font-medium">{createdAt}</span>
      </div>

      <div className="flex justify-end">
        <button className="bg-blue-800 text-white px-3 py-1.5 rounded-lg border border-slate-300 hover:bg-white hover:text-blue-800 hover:border-blue-800 transition-colors duration-300">
          Open Board
        </button>
      </div>
    </div>
  );
};

export default BoardCard;
