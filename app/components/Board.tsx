"use client";

import React, { useMemo, useState } from "react";
import Column from "./Column";
import { defaultData } from "../lib/default_cards";
import { defaultColumns } from "../lib/default_columns";
import { ColumnMeta } from "../types";
import NewColumnModal from "./NewColumnModal";

const Board = () => {
  const [columns, setColumns] = useState(defaultColumns);
  const [isColumnModalOpen, setIsColumnModalOpen] = useState(false);
  // const [id, setId] = useState(defaultColumns.length);

  const cardStatus = useMemo(() => {
    return {
      todo: defaultData.filter((c) => c.status === "todo"),
      progress: defaultData.filter((c) => c.status === "progress"),
      done: defaultData.filter((c) => c.status === "done"),
      pending: defaultData.filter((c) => c.status === "pending"),
    };
  }, []);

  const handleAddButton = () => {
    setIsColumnModalOpen(true);
  };

  const handleAddColumn = (title: string) => {
    const status = title
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9-]/g, "");

    if (!status) return;

    if (columns.some((c) => c.status.toLowerCase() === status)) return;

    setColumns((prev) => [...prev, { id: prev.length + 1, title, status }]);
    // console.log(columns);
  };

  return (
    <div className="min-h-screen">
      {isColumnModalOpen && (
        <NewColumnModal
          // id={id}
          isOpen={isColumnModalOpen}
          onClose={() => setIsColumnModalOpen(false)}
          onAdd={handleAddColumn}
          // setId={setId}
        />
      )}

      <div className="mx-auto w-full max-w-6xl px-3 sm:px-4 lg:px-6 py-4 flex flex-col gap-5">
        <div className="flex gap-4 justify-between items-center overflow-x-hidden sm:flex-row sm:gap-4 sm:overflow-x-auto sm:pb-3 lg:flex-wrap lg:overflow-x-visible">
          <h2 className="text-blue-800 text-2xl font-bold">CKB</h2>
          <button
            className="bg-blue-800 text-white px-3 py-1.5 rounded-lg border border-slate-300 hover:bg-white hover:text-blue-800 hover:border-blue-800 transition-colors duration-300"
            onClick={handleAddButton}
          >
            Add Column
          </button>
        </div>
        <div className="h-px bg-blue-200 w-full" />
        <div className="flex flex-wrap gap-4">
          {columns.map((col: ColumnMeta) => (
            <Column
              key={col.id}
              title={col.title}
              cards={defaultData.filter((c) => c.status === col.status)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Board;
