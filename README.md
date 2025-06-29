# 🗂️ Kanban ToDo List

A modern Kanban-style task management application built with Next.js 15, featuring drag-and-drop functionality, real-time updates, and a responsive design. The app allows users to manage tasks across four columns: **Backlog**, **In Progress**, **Review**, and **Done**.

---

## 🚀 Tech Stack

- ✅ [Next.js 15](https://nextjs.org/) with TypeScript & Turbopack
- ✅ [React 19](https://react.dev/) (Latest version)
- ✅ [Zustand](https://zustand-demo.pmnd.rs/) (Lightweight state management)
- ✅ [TanStack Query](https://tanstack.com/query/latest) (Server state management)
- ✅ [Material UI v7](https://mui.com/) (Modern UI components)
- ✅ [DND Kit](https://dndkit.com/) (Modern drag & drop library)
- ✅ [React Hook Form](https://react-hook-form.com/) (Form handling)
- ✅ [Yup](https://github.com/jquense/yup) (Schema validation)
- ✅ [React Hot Toast](https://react-hot-toast.com/) (Toast notifications)
- ✅ [json-server](https://github.com/typicode/json-server) (Mock REST API)
- ✅ [Axios](https://axios-http.com/) (HTTP client)

---

## 📝 Features

- ✅ **Kanban Board** with 4 customizable columns (Backlog, In Progress, Review, Done)
- ✅ **Task Management** - Create, edit, and delete tasks with rich descriptions
- ✅ **Drag & Drop** - Seamless task movement between columns using DND Kit
- ✅ **Real-time Search** - Filter tasks by title or description
- ✅ **Infinite Scroll** - Load more tasks as you scroll in each column
- ✅ **Form Validation** - Robust form handling with React Hook Form + Yup
- ✅ **Toast Notifications** - User feedback for all actions
- ✅ **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- ✅ **Server State Management** - Smart caching and background updates with TanStack Query
- ✅ **Optimistic Updates** - Instant UI feedback with automatic error recovery
- ✅ **TypeScript** - Full type safety throughout the application

---

## 📦 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/kanban-todo.git
cd kanban-todo
```

### 2. Install Dependencies

```bash
# Using Yarn (recommended)
yarn install

# Or using npm
npm install
```

### 3. Start the Development Environment

```bash
# Terminal 1: Start the Next.js development server with Turbopack
yarn dev

# Terminal 2: Start the JSON server for the mock API
yarn api
```

### 4. Available Scripts

```bash
yarn dev       # Start development server with Turbopack
yarn build     # Create production build
yarn start     # Start production server
yarn lint      # Run ESLint
yarn api       # Start json-server on port 4000
```

### 5. Access the Application

- **Frontend**: [http://localhost:3000](http://localhost:3000)
- **API Server**: [http://localhost:4000](http://localhost:4000)
- **API Endpoint**: [http://localhost:4000/tasks](http://localhost:4000/tasks)

---

## 📁 Project Structure

```plaintext
src/
├── app/                          # Next.js 15 App Router
│   ├── layout.tsx               # Root layout with providers
│   ├── page.tsx                 # Home page with SSR data fetching
│   ├── globals.css              # Global styles
│   └── theme/                   # Material UI theme configuration
│
├── components/                   # Reusable UI components
│   ├── AddAndEditModal/         # Task creation/editing modal
│   │   ├── AddAndEditModal.tsx  # Main modal component
│   │   ├── FormInputs.tsx       # Form input components
│   │   └── form.validation.ts   # Yup validation schemas
│   ├── Icons/                   # Custom icon components
│   ├── TaskBoard.tsx            # Main Kanban board layout
│   ├── TaskColumn.tsx           # Individual column component
│   ├── TaskCard.tsx             # Task card with drag & drop
│   ├── TaskActions.tsx          # Task action buttons (edit/delete)
│   ├── SearchBar.tsx            # Task search functionality
│   ├── AddTaskButton.tsx        # Add new task button
│   ├── DeleteAlert.tsx          # Delete confirmation dialog
│   └── HomePageHeader.tsx       # Page header component
│
├── hooks/                       # Custom React hooks
│   ├── useAddAndEditModal.ts    # Modal state management
│   ├── useDndBoard.ts           # Drag & drop logic
│   └── useTaskColumn.ts         # Column-specific logic
│
├── lib/                         # Core utilities and configurations
│   ├── api.ts                   # Axios API functions
│   ├── store.ts                 # Zustand state management
│   └── react-query-provider.tsx # TanStack Query setup
│
├── modules/                     # Page-level components
│   └── Home.tsx                 # Main home page component
│
├── types/                       # TypeScript type definitions
│   └── index.ts                 # All application types
│
└── utils/                       # Utility functions
    ├── emotion-cache.ts         # Emotion CSS-in-JS cache
    └── formatName.ts            # String formatting utilities

public/
├── db.json                      # Mock database for json-server
└── [static assets]              # Images, icons, etc.
```

---

## 🏗️ Architecture & Design Patterns

### State Management

- **Zustand**: Lightweight state management for client-side state
- **TanStack Query**: Server state management with caching and synchronization
- **React Hook Form**: Form state management with validation

### Component Architecture

- **Atomic Design**: Components organized by complexity and reusability
- **Custom Hooks**: Business logic separated into reusable hooks
- **TypeScript**: Full type safety with custom interfaces and types

### Drag & Drop Implementation

- **DND Kit**: Modern, accessible drag & drop with touch support
- **Sortable Context**: Handles sorting within columns
- **Droppable Areas**: Each column acts as a drop zone
- **Optimistic Updates**: Immediate UI feedback with error recovery

---

## 🎨 UI/UX Features

- **Material Design**: Consistent design language with Material UI v7
- **Responsive Layout**: Mobile-first design with breakpoint optimization
- **Dark/Light Mode**: Automatic theme detection based on system preferences
- **Smooth Animations**: Fluid transitions for drag & drop operations
- **Toast Notifications**: Non-intrusive feedback for user actions
- **Loading States**: Skeleton loaders and progress indicators
- **Error Boundaries**: Graceful error handling and recovery

---

## 🔧 Development Features

- **Next.js 15**: Latest features including Turbopack for faster builds
- **TypeScript**: Full type safety and better developer experience
- **ESLint**: Code quality and consistency enforcement
- **Hot Reload**: Instant feedback during development
- **API Mocking**: json-server for rapid prototyping
- **Modern React**: React 19 with latest hooks and patterns

---

## 🚀 Usage Guide

### Creating Tasks

1. Click the **"Add Task"** button in any column
2. Fill in the task title and description
3. Select the appropriate column
4. Click **"Save"** to create the task

### Managing Tasks

- **Edit**: Click the edit icon on any task card
- **Delete**: Click the delete icon and confirm the action
- **Move**: Drag and drop tasks between columns
- **Search**: Use the search bar to filter tasks by title or description

### Keyboard Shortcuts

- **Enter**: Save task when editing
- **Escape**: Cancel editing/close modals
- **Tab**: Navigate between form fields

---

## 🔄 API Endpoints

The application uses a mock REST API powered by json-server:

```bash
GET    /tasks           # Get all tasks
POST   /tasks           # Create a new task
PUT    /tasks/:id       # Update a task
DELETE /tasks/:id       # Delete a task
```

### Task Data Structure

```typescript
interface Task {
  id: string;
  title: string;
  description: string;
  column: "backlog" | "in_progress" | "review" | "done";
}
```

---

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add amazing feature'`
4. **Push to the branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Development Guidelines

- Follow TypeScript best practices
- Write meaningful commit messages
- Add tests for new features
- Ensure ESLint passes
- Update documentation as needed

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- [Next.js Team](https://nextjs.org/) for the amazing framework
- [Material UI](https://mui.com/) for the beautiful components
- [DND Kit](https://dndkit.com/) for the drag & drop functionality
- [TanStack](https://tanstack.com/) for the excellent data fetching library

---

## 📞 Support

If you have any questions or need help, please:

- Open an issue on GitHub
- Check the documentation
- Review existing issues for solutions

**Happy coding! 🎉**
