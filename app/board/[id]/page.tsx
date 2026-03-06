import Board from "@/app/components/Board";
import { defaultBoards } from "@/app/lib/default_board";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    id: number;
  }>;
};

export default async function BoardPage({ params }: Props) {
  const { id } = await params;
  const boardId = Number(id);

  const board = defaultBoards.find((b) => b.id === boardId);

  if (!board) return notFound();

  return <Board board={board} />;
}
