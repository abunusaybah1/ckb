import React from "react";
import { CardProps } from "../types";

const Card = ({ title, description, tags, dueDate }: CardProps) => {
  return (
    <div className="border border-gray-300 p-4 rounded-md shadow-md mb-4 relative transition-all duration-300 hover:shadow-lg">
      <div className="absolute top-2 right-2 flex ">
        {tags.map((tag: string, i: number) => (
          <span
            className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs mr-1 "
            key={i}
          >
            {tag}
          </span>
        ))}
      </div>
      <h4 className="font-bold">{title}</h4>
      <p className="text-sm">{description}</p>

      <p className="text-sm text-red-700">Due date: {dueDate}</p>
    </div>
  );
};

export default Card;
