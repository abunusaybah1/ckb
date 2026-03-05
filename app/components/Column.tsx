import React from "react";
import Card from "./Card";
import { ColumnProps } from "../types";

const Column = ({ title, cards }: ColumnProps) => {
  return (
    <div className="p-2 max-w-225 mx-auto">
      <h3 className=" font-bold mb-4">{title}</h3>

      {cards.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          status={card.status}
          title={card.title}
          description={card.description}
          tags={card.tags}
          dueDate={card.dueDate}
        />
      ))}
    </div>
  );
};

export default Column;
