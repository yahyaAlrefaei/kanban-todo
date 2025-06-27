# 🗂️ Kanban ToDo List

A Kanban-style task management application built with Next.js, Zustand, React Query, and Material UI.  
The app allows users to manage tasks across four columns: **Backlog**, **In Progress**, **Review**, and **Done**.

---

## 🚀 Tech Stack

- ✅ [Next.js](https://nextjs.org/) with TypeScript
- ✅ [Zustand](https://zustand-demo.pmnd.rs/) (Global state management)
- ✅ [React Query](https://tanstack.com/query/latest) (Data fetching + caching)
- ✅ [Material UI](https://mui.com/) (UI components and layout)
- ✅ [json-server](https://github.com/typicode/json-server) (Mock REST API)
- ✅ [react-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd) (Drag & drop functionality)

---

## 📝 Features

- ✅ **View tasks** in 4 separate columns
- ✅ **Create new tasks** with title, description, and column
- ✅ **Edit and delete** existing tasks
- ✅ **Drag and drop** tasks between columns
- ✅ **Filter** tasks by title or description via search bar
- ✅ **Infinite scroll** or **pagination** in each column
- ✅ **React Query** for smart data caching and background refetching
- ✅ **Zustand** for fast, scalable state management

---

## 📦 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/kanban-todo.git
cd kanban-todo
yarn install   # Install dependencies
yarn dev       # Run development server
yarn api       # Run json-server on port 4000
yarn build     # Create a production build
yarn lint      # Run ESLint


/components
  TaskCard.tsx           # Displays a single task
  TaskColumn.tsx         # Represents a column (Backlog, etc.)
  TaskFormDialog.tsx     # Dialog for creating/updating tasks
  SearchBar.tsx          # Task search input

/lib
  api.ts                 # API helper functions using axios
  store.ts               # Zustand global store
  queryClient.ts         # React Query configuration

/pages
  index.tsx              # Main UI layout and logic

/public
  db.json                # Mock tasks data for json-server
```
