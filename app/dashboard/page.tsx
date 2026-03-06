"use client";

import React, { useState } from "react";
import { defaultBoards } from "../lib/default_board";
import { BoardItemProps } from "@/app/types/index";
import BoardCard from "../components/BoardCard";
import NewBoardModal from "../components/modals/NewBoardModal";

const Dashboard = () => {
  const [boards, setBoards] = useState<BoardItemProps[]>(defaultBoards);
  const [isBoardModalOpen, setIsBoardModalOpen] = useState(false);

  const handleOpenBoardModal = () => {
    setIsBoardModalOpen(true);
  };

  const handleAddBoard = (title: string, description: string) => {
    setBoards((prev) => [
      ...prev,
      {
        id: Date.now(),
        title,
        description,
        createdAt: new Date().toISOString().split("T")[0],
      },
    ]);
  };

  const handleDeleteBoard = (boardId: number) => {
    setBoards((prev) => prev.filter((board) => board.id !== boardId));
  };

  return (
    <div className="min-h-screen">
      {isBoardModalOpen && (
        <NewBoardModal
          isOpen={isBoardModalOpen}
          onClose={() => setIsBoardModalOpen(false)}
          onAdd={handleAddBoard}
        />
      )}

      <div className="mx-auto w-full max-w-6xl px-3 sm:px-4 lg:px-6 py-4 flex flex-col gap-5">
        <div className="flex gap-4 justify-between items-center overflow-x-hidden sm:flex-row sm:gap-4 sm:overflow-x-auto sm:pb-3 lg:flex-wrap lg:overflow-x-visible">
          <h2 className="text-blue-800 text-2xl font-bold">CKB Dashboard</h2>

          <button
            className="bg-blue-800 text-white px-3 py-1.5 rounded-lg border border-slate-300 hover:bg-white hover:text-blue-800 hover:border-blue-800 transition-colors duration-300"
            onClick={handleOpenBoardModal}
          >
            Create Board
          </button>
        </div>

        <div className="h-px bg-blue-200 w-full" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {boards.map((board) => (
            <BoardCard
              key={board.id}
              id={board.id}
              title={board.title}
              description={board.description}
              createdAt={board.createdAt}
              onDelete={handleDeleteBoard}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
