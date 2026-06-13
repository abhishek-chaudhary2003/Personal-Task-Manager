# Personal Task Manager

A full-stack task management application built as part of the **Studio Graphene Programme take-home assignment (Exercise 1: Personal Task Manager)**.

This project allows a user to create, view, update, and manage personal tasks through a clean and responsive interface. Users can add tasks with optional descriptions and due dates, mark tasks as completed, edit or delete tasks, search by title, and visually identify overdue tasks. Task data persists across server restarts using JSON file storage.

---

# Live Demo

## Frontend Deployment

**Live App:**  
https://task-manager-app-frontend.netlify.app/


---

## Backend Deployment

**API Base URL:**  
https://personal-task-manager-qhvd.onrender.com



---


# Features

## Must-Have Features

### Task Management
- Create a new task with:
  - Title (**required**)
  - Description (**optional**)
  - Due date (**optional**)

### Task Viewing
- View all tasks sorted by **newest first**

### Task Completion
- Mark tasks as:
  - Complete
  - Incomplete

### Task Editing
- Edit:
  - Title
  - Description
  - Due date

### Task Deletion
- Delete tasks with a **confirmation prompt**

---

## Should-Have Features

### Task Statistics
- Total task count
- Active task count
- Completed task count

### Overdue Task Highlighting
- Tasks with past due dates are visually highlighted
- Only applies to incomplete tasks

### Empty State UI
- Friendly UI shown when no tasks exist

---

## Bonus Features

### Search
- Search tasks by title
- Case-insensitive filtering

### Persistent Storage
- Tasks persist after server restart using a JSON file

### Responsive Design
- Mobile-friendly layout
- Tablet and desktop support

---

# Tech Stack

## Frontend

### React (Vite)
Used for building a fast and responsive frontend using functional components and hooks.

### Tailwind CSS
Used for responsive styling and consistent UI design.

### Axios
Used for communicating with the backend API.

### React Icons
Used for task action icons (edit, delete, complete).

---

## Backend

### Node.js
Runtime environment for server-side logic.

### Express.js
Used to build REST APIs and handle HTTP requests.

### UUID
Used to generate unique IDs for tasks.

### CORS
Used to allow communication between frontend and backend during development and deployment.

### dotenv
Used for environment variable management.

### JSON File Storage
Used for lightweight persistence without requiring a database.

---

# Why This Stack?

For this assignment, I chose **JSON file storage** instead of a database to keep the application lightweight while still supporting persistence across server restarts.

The focus of the implementation was on:

- Clean full-stack architecture
- REST API design
- Frontend/backend separation
- Readable and maintainable code
- Good user experience

---

# Project Structure

```txt
task-manager/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.jsx
│   │   │   ├── TaskCard.jsx
│   │   │   ├── TaskForm.jsx
│   │   │   ├── TaskList.jsx
│   │   │   ├── SearchBar.jsx
│   │   │   └── EmptyState.jsx
│   │   │
│   │   ├── pages/
│   │   │   └── Home.jsx
│   │   │
│   │   ├── services/
│   │   │   └── taskApi.js
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   └── package.json
│
├── server/
│   ├── controllers/
│   │   └── taskController.js
│   │
│   ├── routes/
│   │   └── taskRoutes.js
│   │
│   ├── utils/
│   │   └── fileStore.js
│   │
│   ├── data/
│   │   └── tasks.json
│   │
│   ├── server.js
│   └── package.json
│
└── README.md
````

## Folder Responsibilities

### `client/`

Contains the React frontend application.

### `components/`

Reusable UI components used throughout the application.

### `services/`

Contains API request logic and backend communication.

### `pages/`

Contains page-level components.

### `server/`

Contains the Express backend application.

### `controllers/`

Contains business logic for CRUD operations.

### `routes/`

Contains API route definitions.

### `utils/`

Contains helper functions for reading and writing JSON files.

### `data/`

Stores persistent task data.

---

# API Documentation

## Base URL

```txt
http://localhost:5000/api/tasks
```

For deployed version:

```txt
https://personal-task-manager-qhvd.onrender.com/api/tasks
```

---

## 1. Get All Tasks

**Method:** `GET`

**Endpoint**

```http
/api/tasks
```

### Query Parameters

| Parameter | Type   | Description           |
| --------- | ------ | --------------------- |
| search    | string | Search tasks by title |

### Example Request

```http
GET /api/tasks?search=react
```

### Success Response

```json
[
  {
    "id": "uuid",
    "title": "Learn React",
    "description": "Practice hooks",
    "dueDate": "2026-06-15",
    "completed": false,
    "createdAt": "2026-06-13T10:00:00Z"
  }
]
```

---

## 2. Create Task

**Method:** `POST`

**Endpoint**

```http
/api/tasks
```

### Request Body

```json
{
  "title": "Learn React",
  "description": "Practice hooks",
  "dueDate": "2026-06-15"
}
```

### Success Response

```json
{
  "message": "Task created successfully",
  "task": {}
}
```

### Validation Error

```json
{
  "message": "Title is required"
}
```

---

## 3. Update Task

**Method:** `PUT`

**Endpoint**

```http
/api/tasks/:id
```

### Request Body

```json
{
  "title": "Updated Task",
  "description": "Updated Description",
  "dueDate": "2026-06-20"
}
```

### Success Response

```json
{
  "message": "Task updated successfully"
}
```

### Error Response

```json
{
  "message": "Task not found"
}
```

---

## 4. Toggle Task Status

**Method:** `PATCH`

**Endpoint**

```http
/api/tasks/:id/toggle
```

### Success Response

```json
{
  "message": "Task status updated successfully"
}
```

---

## 5. Delete Task

**Method:** `DELETE`

**Endpoint**

```http
/api/tasks/:id
```

### Success Response

```json
{
  "message": "Task deleted successfully"
}
```

---

# How to Run Locally

## Prerequisites

Ensure you have installed:

* Node.js (v18 or later recommended)
* npm

---

## 1. Clone Repository

```bash
git clone https://github.com/abhishek-chaudhary2003/Personal-Task-Manager
```

```bash
cd task-manager
```

---

## 2. Backend Setup

Move into server directory:

```bash
cd server
```

Install dependencies:

```bash
npm install
```

Create `.env` file:

```env
PORT=5000
```

Start backend server:

```bash
npm run dev
```

Backend runs on:

```txt
http://localhost:5000
```

---

## 3. Frontend Setup

Open another terminal.

Move into frontend:

```bash
cd client
```

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Frontend runs on:

```txt
http://localhost:5173
```

---

# What Works

* Full CRUD task management
* Task completion toggling
* Task editing
* Task deletion with confirmation
* Search functionality
* Persistent storage
* Responsive UI
* Overdue task highlighting
* Empty state UI
* Active vs completed task counts

---

# Known Limitations

* No authentication (single-user assumption based on assignment brief)
* Search currently filters only by title
* No drag-and-drop task reordering
* JSON file storage is not suitable for production-scale applications
* No automated tests included

---

# Future Improvements / Next Steps

If given more time, I would add:

* Drag-and-drop task reordering
* Toast notifications for success/error states
* Form validation library (Zod / React Hook Form)
* Loading skeletons
* Unit and integration testing
* SQLite or PostgreSQL database
* Multi-user authentication
* Dark mode support

---

# Notes

AI tools (ChatGPT) were used for debugging support, implementation guidance. All code was reviewed, understood, and adapted before inclusion in the final submission.

---

# Author

Built by **Abhishek Chaudhary** for the **Studio Graphene Programme Take-Home Assignment**.
