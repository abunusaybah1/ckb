"use client";

import React, { useMemo, useState } from "react";
import Column from "./Column";
import { defaultData } from "../lib/default_cards";
import { defaultColumns } from "../lib/default_columns";

const Board = () => {
  const [columns, setColumns] = useState(defaultColumns);

  // const cardStatus = useMemo(() => {
  //   return {
  //     todo: defaultData.filter((c) => c.status === "todo"),
  //     progress: defaultData.filter((c) => c.status === "progress"),
  //     done: defaultData.filter((c) => c.status === "done"),
  //   };
  // }, []);

  const todoCards = defaultData.filter((c) => c.status === "todo");
  const progressCards = defaultData.filter((c) => c.status === "progress");
  const doneCards = defaultData.filter((c) => c.status === "done");

  const handleAdd = () => {
    //open modal
  };

  return (
    <div className="flex flex-col gap-5 p-3 pt-3">
      <div className="top flex justify-between">
        <h2 className="text-blue-800 text-2xl font-bold">CKB</h2>
        <button
          className="bg-blue-800 text-white px-2 py-1 rounded-lg self-end"
          onClick={handleAdd}
        >
          Add Column
        </button>
      </div>
      <hr style={{ color: "blue" }} />
      <div className="flex justify-start">
        <Column title={"To Do"} cards={todoCards} />
        <Column title={"In Progress"} cards={progressCards} />
        <Column title={"Done"} cards={doneCards} />
      </div>
    </div>
  );
};

export default Board;
