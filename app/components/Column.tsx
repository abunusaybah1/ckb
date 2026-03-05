import React from "react";
import Card from "./Card";
import { ColumnProps } from "../types";

const Column = ({ title, cards }: ColumnProps) => {
  return (
    <div className="w-full sm:w-70 lg:w-[320px] bg-slate-100 border border-slate-200 rounded-xl p-3">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-bold text-slate-800">
          {title} <span className="text-slate-500">({cards.length})</span>
        </h3>
      </div>
      <div className="flex flex-col flex-wrap gap-4 justify-start">
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
    </div>
  );
};

export default Column;
