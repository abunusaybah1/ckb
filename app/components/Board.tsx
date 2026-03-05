"use client";

import React, { useMemo, useState } from "react";
import Column from "./Column";
import { defaultData } from "../lib/default_cards";
import { defaultColumns } from "../lib/default_columns";
import { ColumnMeta } from "../types";

const Board = () => {
  const [columns, setColumns] = useState(defaultColumns);

  const cardStatus = useMemo(() => {
    return {
      todo: defaultData.filter((c) => c.status === "todo"),
      progress: defaultData.filter((c) => c.status === "progress"),
      done: defaultData.filter((c) => c.status === "done"),
    };
  }, []);

  const handleAdd = () => {
    //open modal
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto w-full max-w-6xl px-3 sm:px-4 lg:px-6 py-4 flex flex-col gap-5">
        <div className="flex gap-4 justify-between overflow-x-hidden sm:flex-row sm:gap-4 sm:overflow-x-auto sm:pb-3 lg:flex-wrap lg:overflow-x-visible">
          <h2 className="text-blue-800 text-2xl font-bold">CKB</h2>
          <button
            className="bg-blue-800 text-white px-4 py-2 rounded-lg border border-slate-300 hover:bg-white hover:text-blue-800 hover:border-blue-800 transition-colors duration-300"
            onClick={handleAdd}
          >
            Add Column
          </button>
        </div>
        <div className="h-px bg-blue-200 w-full" />
        <div className="flex flex-wrap gap-4">
          {defaultColumns.map((col: ColumnMeta) => (
            <Column
              title={col.title}
              cards={cardStatus[col.id] || []}
              key={col.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Board;
