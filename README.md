# Collaborative Knowledge Board (CKB)

A minimal production-grade collaborative board system built with **Next.js (App Router)** and **TypeScript**, designed to meet the Stage 1 technical requirements for a SaaS-style internal workspace tool at Talenvo internship.

---

## ✅ What’s Included (Core Features)

### Workspace Dashboard

- Displays a list of boards.
- Create new boards (title / description).
- Delete boards.
- Boards show created date.

### Board View

- Create columns.
- Rename columns.
- Delete columns (also removes cards in that column).
- Create cards in columns.
- Edit cards.
- Delete cards.

### Card Features

- Cards support a title, description, tags, and due date.
- Description is rendered as Markdown (parsed and displayed, not raw text).

### Persistence

- Boards are stored in **`localStorage`** so they survive page reload.

---

## 🔧 Folder Structure

```
app/
  page.tsx                   # Dashboard (board list)
  board/[id]/page.tsx        # Board view (columns + cards)
  components/
    Board.tsx                # Board page UI + state
    BoardCard.tsx            # Board list card component
    Column.tsx               # Column UI + card list
    modals/                  # Modal components (new/edit card, new board, new column)
  lib/
    default_board.ts         # Seed board data
    default_columns.ts       # Default columns for new boards
  types/
    index.ts                 # Domain model types

README.md                    # This file
package.json
...
```

---

## 🧠 State Architecture (Current)

### What’s implemented

- State is managed locally in component state (`useState`) for both Dashboard and Board pages.
- Boards are persisted via `localStorage` (
  `ckb_boards` key).
- The Board page loads the board from `defaultBoards` + `localStorage`.

### Basic architectural features

✅ Supports basic CRUD for boards, columns, and cards
✅ Persists data between reloads

## 🔍 Performance Strategy

### What is already in place

- Components are reasonably small and focused.
- State updates are localized (e.g., each board manages its own columns/cards).
- Modal rendering is conditional (only mounted when open).

## ♿ Accessibility Notes

Current work includes:

- Use of semantic HTML elements (`button`, `h2`, `form`, etc.).
- Basic keyboard support via standard HTML focus behavior.

Planned improvements:

- Explicit focus management for modals (focus trap, return focus on close).
- ARIA attributes for modal dialogs and interactive controls.

---

## 🧩 Engineering Decisions & Notes

### State management choice

This project stays within React state + `localStorage` for Stage 1 to keep the architecture simple.

For production-scale, the plan would be to:

1. Normalize state into entities (`boards`, `columns`, `cards`).
2. Store in a centralized store (e.g., Context + reducer or lightweight store like Zustand).
3. Separate domain state from UI state (modal open/close, current editing item, etc.).

### Domain modeling

- `Board` contains `columns` and `cards`.
- `Column` has `id`, `title`, and `status`.
- `Card` has `title`, `description`, `tags`, `dueDate`, `status`, and `id`.

---

## 🚀 Running Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)