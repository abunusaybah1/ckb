import React from "react";
import { CardProps } from "../types";

const Card = ({
  id,
  title,
  description,
  tags,
  dueDate,
  onEdit,
  onDelete,
  status,
}: CardProps) => {
  return (
    <div className="bg-white border border-slate-200 p-4 rounded-xl shadow-sm relative">
      <div className="absolute top-2 right-2 flex gap-2">
        <span
          className="font-bold cursor-pointer text-slate-500 hover:text-black transition-all duration-400"
          onClick={() =>
            onEdit({ id, title, description, tags, dueDate, status })
          }
        >
          &#9998;
        </span>
        <span
          className="font-bold cursor-pointer text-slate-500 hover:text-black transition-all duration-400"
          onClick={() => onDelete(id)}
        >
          &#128473;
        </span>
      </div>

      <div className="absolute top-3 right-14 flex flex-wrap gap-1 max-w-[60%] justify-end">
        {tags.map((tag: string, i: number) => (
          <span
            key={i}
            className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full text-xs"
          >
            {tag}
          </span>
        ))}
      </div>

      <h4 className="font-bold pr-20">{title}</h4>
      <p className="text-sm text-slate-700 mt-1">{description}</p>
      <p className="text-sm text-red-700 mt-3">Due date: {dueDate}</p>
    </div>
  );
};

export default Card;
