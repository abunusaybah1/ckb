import { BoardItemProps } from "../types";
import { defaultColumns } from "./default_columns";
import { defaultData } from "./default_cards";

export const defaultBoards: BoardItemProps[] = [
  {
    id: 1,
    title: "Product Roadmap",
    description: "Track product plans and feature progress.",
    createdAt: "2026-03-06",
    columns: defaultColumns,
    cards: defaultData,
  },
  {
    id: 2,
    title: "School Project",
    description: "Manage tasks and milestones for the team project.",
    createdAt: "2026-03-05",
    columns: [
      { id: 1, status: "todo", title: "To do" },
      { id: 2, status: "progress", title: "Progress" },
      { id: 3, status: "done", title: "Done" },
    ],
    cards: [
      {
        id: 101,
        status: "todo",
        title: "Research topic",
        description: "Find materials for the final year project.",
        tags: ["school", "research"],
        dueDate: "2026-03-10",
      },
      {
        id: 102,
        status: "progress",
        title: "Write proposal",
        description: "Draft the first proposal document.",
        tags: ["proposal"],
        dueDate: "2026-03-12",
      },
      {
        id: 103,
        status: "done",
        title: "Form group",
        description: "Choose group members.",
        tags: ["team"],
        dueDate: "2026-03-04",
      },
    ],
  },
  {
    id: 3,
    title: "Marketing Board",
    description: "Organize content ideas and campaign schedules.",
    createdAt: "2026-03-04",
    columns: [
      { id: 1, status: "ideas", title: "Ideas" },
      { id: 2, status: "design", title: "Design" },
      { id: 3, status: "published", title: "Published" },
    ],
    cards: [
      {
        id: 201,
        status: "ideas",
        title: "Ramadan flyer",
        description: "Prepare concept for Ramadan promo.",
        tags: ["design", "social"],
        dueDate: "2026-03-09",
      },
      {
        id: 202,
        status: "design",
        title: "Instagram post",
        description: "Design carousel for awareness campaign.",
        tags: ["instagram"],
        dueDate: "2026-03-11",
      },
      {
        id: 203,
        status: "published",
        title: "WhatsApp banner",
        description: "Banner already shared to audience.",
        tags: ["banner"],
        dueDate: "2026-03-02",
      },
    ],
  },
];
