export interface CardProps {
  id: string;
  status: "todo" | "progress" | "done";
  title: string;
  description: string;
  tags: string[];
  dueDate: string;
}

export interface ColumnProps {
  title: string;
  cards: CardProps[];
}

export interface ColumnMeta {
  id: "todo" | "progress" | "done";
  title: string;
//   cards: CardProps[];
}

