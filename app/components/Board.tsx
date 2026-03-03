import React from "react";
import { defaultData } from "@/app/lib/index";
import Card from "./Card";
import { BoardProps } from "../types";

const Board = () => {
  return (
    <div className="p-2 max-w-225 mx-auto">
      <h2 className="text-2xl font-bold mb-4">Cards</h2>

      {defaultData.map((card) => (
        <Card
          key={card.id}
          id={+card.id}
          title={card.title}
          description={card.description}
          tags={card.tags}
          dueDate={card.dueDate}
        />
      ))}
    </div>
  );
};

export default Board;
