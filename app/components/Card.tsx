import React from "react";
import { CardProps } from "../types";

const Card = ({ id, title, description, tags, dueDate }: CardProps) => {
  return (
    <div className="border p-4 rounded-md shadow-md mb-4 relative">
      {tags.map((tag: string, i: number) => (
        <span
          className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs mr-2 absolute top-2 right-2"
          key={i}
        >
          {tag}
        </span>
      ))}
      <h4 className="font-bold">{title}</h4>
      <p className="text-sm">{description}</p>

      <p className="text-sm text-red-700">Due date: {dueDate}</p>
    </div>
  );
};

export default Card;
