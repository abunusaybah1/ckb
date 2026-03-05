import React from "react";
import { CardProps } from "../types";

const Card = ({ title, description, tags, dueDate }: CardProps) => {
  return (
    <div className="bg-white border border-slate-200 p-4 rounded-xl shadow-sm relative hover:shadow-md transition">
      <div className="absolute top-3 right-3 flex flex-wrap gap-1 max-w-[60%] justify-end">
        {tags.map((tag: string, i: number) => (
          <span
            className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full text-xs"
            key={i}
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
