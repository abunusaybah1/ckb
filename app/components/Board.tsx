"use client";

import React, { useState } from "react";
import Column from "./Column";
import { defaultData } from "../lib/default_cards";
import { defaultColumns } from "../lib/default_columns";
import { CardMeta, CardProps, ColumnMeta } from "../types";
import NewColumnModal from "./modals/NewColumnModal";
import NewCardModal from "./modals/NewCardModal";
import EditCardModal from "./modals/EditCardModal";

const Board = () => {
  const [columns, setColumns] = useState(defaultColumns);
  const [cards, setCards] = useState<CardProps[]>(defaultData);

  const [isColumnModalOpen, setIsColumnModalOpen] = useState(false);

  const [isCardModalOpen, setIsCardModalOpen] = useState(false);
  const [isEditCardModalOpen, setIsEditCardModalOpen] = useState(false);

  const [activeColumnStatus, setActiveColumnStatus] = useState<string>("");
  const [editingCard, setEditingCard] = useState<CardProps | null>(null);

  const handleAddButton = () => setIsColumnModalOpen(true);

  const handleAddColumn = (title: string) => {
    const status = title
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9-]/g, "");
    if (!status) return;

    if (columns.some((c) => c.status.toLowerCase() === status)) return;

    setColumns((prev) => [...prev, { id: prev.length + 1, title, status }]);
  };

  const handleRenameColumn = (colId: number, newTitle: string) => {
    setColumns((prev) =>
      prev.map((c) => (c.id === colId ? { ...c, title: newTitle } : c)),
    );
  };

  const handleDeleteColumn = (colId: number) => {
    const col = columns.find((c) => c.id === colId);

    setColumns((prev) => prev.filter((c) => c.id !== colId));

    if (col) {
      setCards((prev) => prev.filter((card) => card.status !== col.status));
    }
  };

  const openAddCardModal = (status: string) => {
    setActiveColumnStatus(status);
    setIsCardModalOpen(true);
  };

  const openEditCardModal = (card: CardProps) => {
    setEditingCard(card);
    setIsEditCardModalOpen(true);
  };

  const handleCreateCard = (data: CardMeta) => {
    if (!activeColumnStatus) return;

    setCards((prev) => [
      ...prev,
      {
        id: Date.now(),
        status: activeColumnStatus,
        title: data.title,
        description: data.description,
        tags: data.tags,
        dueDate: data.dueDate,
      },
    ]);
  };

  const handleUpdateCard = (id: number, data: CardMeta) => {
    setCards((prev) =>
      prev.map((c) =>
        c.id === id
          ? {
              ...c,
              title: data.title,
              description: data.description,
              tags: data.tags,
              dueDate: data.dueDate,
            }
          : c,
      ),
    );
  };

  const handleDeleteCard = (id: number) => {
    setCards((prev) => prev.filter((c) => c.id !== id));
  };

  return (
    <div className="min-h-screen">
      {isColumnModalOpen && (
        <NewColumnModal
          isOpen={isColumnModalOpen}
          onClose={() => setIsColumnModalOpen(false)}
          onAdd={handleAddColumn}
        />
      )}

      {isCardModalOpen && (
        <NewCardModal
          isOpen={isCardModalOpen}
          onClose={() => setIsCardModalOpen(false)}
          onAdd={handleCreateCard}
        />
      )}

      {isEditCardModalOpen && (
        <EditCardModal
          isOpen={isEditCardModalOpen}
          onClose={() => {
            setIsEditCardModalOpen(false);
            setEditingCard(null);
          }}
          card={editingCard}
          onSave={handleUpdateCard}
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
              status={col.status}
              cards={cards.filter((c) => c.status === col.status)}
              onDelete={handleDeleteColumn}
              onRename={handleRenameColumn}
              columnId={col.id}
              onAddCard={openAddCardModal}
              onEditCard={openEditCardModal}
              onDeleteCard={handleDeleteCard}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Board;
