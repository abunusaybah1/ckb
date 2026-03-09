"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Board from "@/app/components/Board";
import { defaultBoards } from "@/app/lib/default_board";
import { BoardItemProps } from "@/app/types";

const STORAGE_KEY = "ckb_boards";

const getStoredBoards = (): BoardItemProps[] => {
  if (typeof window === "undefined") return defaultBoards;

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultBoards;
    return JSON.parse(raw) as BoardItemProps[];
  } catch {
    return defaultBoards;
  }
};

export default function BoardPage() {
  const params = useParams();
  const router = useRouter();
  const [board, setBoard] = useState<BoardItemProps | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const id = Number(params?.id);
    if (!id || Number.isNaN(id)) {
      router.replace("/");
      return;
    }

    const boards = getStoredBoards();
    const found = boards.find((b) => b.id === id);

    if (!found) {
      router.replace("/404");
      return;
    }

    setBoard(found);
    setLoading(false);
  }, [params, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span>Loading board…</span>
      </div>
    );
  }

  if (!board) return null;

  return <Board board={board} />;
}
