export interface CardProps {
  id: string;
  status: string;
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
  id: number;
  status: string;
  title: string;
  //   cards: CardProps[];
}

export interface NewColumnModalProps {
  // id: number;
  isOpen: boolean;
  onClose: () => void;
  // setId: () => number;
  onAdd: (title: string) => void;
}

export interface ColumnEditProps extends ColumnProps {
  columnId: number;
  onRename: (columnId: number, title: string) => void;
  onDelete: (columnId: number) => void;
}

export interface NewCardModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (title: string) => void;
}
