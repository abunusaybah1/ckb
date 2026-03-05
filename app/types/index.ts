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
