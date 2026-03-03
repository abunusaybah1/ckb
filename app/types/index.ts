export interface CardProps{
    id: number;
    title: string;
    description: string;
    tags: string[];
    dueDate: string;
}

export interface BoardProps {
    cards: CardProps[];
}