export interface CardProps {
  id: number;
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
}

export interface NewColumnModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (title: string) => void;
}

export interface ColumnEditProps extends ColumnProps {
  columnId: number;
  onRename: (columnId: number, title: string) => void;
  onDelete: (columnId: number) => void;
}

export interface CardMeta {
  title: string;
  description: string;
  tags: string[];
  dueDate: string;
}

export interface NewCardModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (data: CardMeta) => void;
}

export interface EditCardModalProps {
  isOpen: boolean;
  onClose: () => void;
  card: CardProps | null;
  onSave: (id: number, data: CardMeta) => void;
}

export interface CardEditProps extends CardProps {
  onEdit: (card: CardProps) => void;
  onDelete: (cardId: number) => void;
}

export interface ColumnCrudProps extends ColumnEditProps {
  status: string;
  onAddCard: (status: string) => void;
  onEditCard: (card: CardProps) => void;
  onDeleteCard: (id: number) => void;
}

export interface BoardItemProps {
  id: number;
  title: string;
  description: string;
  createdAt: string;
}

export interface NewBoardModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (title: string, description: string) => void;
}

export interface BoardCardProps extends BoardItemProps {
  onDelete: (boardId: number) => void;
}
