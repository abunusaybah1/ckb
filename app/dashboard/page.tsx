"use client";

import React, { useEffect, useState } from "react";
import { defaultBoards } from "../lib/default_board";
import { BoardItemProps } from "@/app/types/index";
import BoardCard from "../components/BoardCard";
import NewBoardModal from "../components/modals/NewBoardModal";
import { defaultColumns } from "../lib/default_columns";

const BOARD_STORAGE_KEY = "ckb_boards";

const removeDuplicateBoards = (boards: BoardItemProps[]): BoardItemProps[] => {
  const map = new Map<number, BoardItemProps>();
  for (const board of boards) {
    if (!map.has(board.id)) {
      map.set(board.id, board);
    }
  }
  return [...map.values()];
};

const loadBoardsFromStorage = (): BoardItemProps[] => {
  if (typeof window === "undefined") return defaultBoards;

  try {
    const item = window.localStorage.getItem(BOARD_STORAGE_KEY);
    if (!item) return defaultBoards;
    const parsed = JSON.parse(item) as BoardItemProps[];
    return removeDuplicateBoards(parsed);
  } catch {
    return defaultBoards;
  }
};

const Dashboard = () => {
  const [boardList, setBoardList] = useState<BoardItemProps[]>(defaultBoards);
  const [isCreateBoardModalOpen, setCreateBoardModalOpen] = useState(false);
  const [hasLoadedBoardsFromStorage, setHasLoadedBoardsFromStorage] =
    useState(false);

  useEffect(() => {
    const stored = loadBoardsFromStorage();
    setBoardList(stored);
    setHasLoadedBoardsFromStorage(true);
  }, []);

  useEffect(() => {
    if (!hasLoadedBoardsFromStorage) return;
    window.localStorage.setItem(BOARD_STORAGE_KEY, JSON.stringify(boardList));
  }, [boardList, hasLoadedBoardsFromStorage]);

  const openCreateBoardModal = () => {
    setCreateBoardModalOpen(true);
  };

  const addBoard = (title: string, description: string) => {
    setBoardList((prev) => {
      const nextId = prev.length
        ? Math.max(...prev.map((board) => board.id)) + 1
        : 1;

      return [
        ...prev,
        {
          id: nextId,
          title,
          description,
          createdAt: new Date().toISOString().split("T")[0],
          columns: defaultColumns,
          cards: [],
        },
      ];
    });
  };

  const removeBoard = (boardId: number) => {
    setBoardList((prev) => prev.filter((board) => board.id !== boardId));
  };

  return (
    <div className="min-h-screen">
      {isCreateBoardModalOpen && (
        <NewBoardModal
          isOpen={isCreateBoardModalOpen}
          onClose={() => setCreateBoardModalOpen(false)}
          onAdd={addBoard}
        />
      )}
      <div className="flex gap-4 justify-between items-center p-4 overflow-x-hidden sm:flex-row sm:gap-4 sm:overflow-x-auto sm:pb-3 lg:flex-wrap lg:overflow-x-visible">
        <h2 className="text-blue-800 text-2xl font-bold ">CKB Dashboard</h2>

        <button
          className="bg-blue-800 text-white px-3 py-1.5 rounded-lg border border-slate-300 hover:bg-white hover:text-blue-800 hover:border-blue-800 transition-colors duration-300"
          onClick={openCreateBoardModal}
        >
          Create Board
        </button>
      </div>
      {boardList.length === 0 ? (
        <div className="min-h-screen flex items-center justify-center">
          <span className="text-slate-500">No boards yet. Create one!</span>
        </div>
      ) : (
        <div className="mx-auto w-full max-w-6xl px-3 sm:px-4 lg:px-6 py-4 flex flex-col gap-5">
          <div className="h-px bg-blue-200 w-full" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {boardList.map((board) => (
              <BoardCard
                key={board.id}
                id={board.id}
                title={board.title}
                description={board.description}
                createdAt={board.createdAt}
                onDelete={removeBoard}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
