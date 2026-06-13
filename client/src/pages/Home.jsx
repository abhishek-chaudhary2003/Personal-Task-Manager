import { useEffect, useState } from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import TaskList from "../components/TaskList";
import EmptyState from "../components/EmptyState";
import TaskForm from "../components/TaskForm";

import {
  getTasks,
  createTask,
  toggleTask,
  deleteTask,
  updateTask,
} from "../services/taskApi";

const Home = () => {
  const [tasks, setTasks] =
    useState([]);

  const [search, setSearch] =
    useState("");

  const [loading, setLoading] =
    useState(true);

  const [editingTask, setEditingTask] =
    useState(null);

  const fetchTasks =
    async () => {
      try {
        setLoading(true);

        const response =
          await getTasks(
            search
          );

        console.log(
          "API response:",
          response.data
        );

        setTasks(
          Array.isArray(
            response.data
          )
            ? response.data
            : []
        );
      } catch (error) {
        console.error(
          "Error fetching tasks:",
          error
        );

        setTasks([]);
      } finally {
        setLoading(false);
      }
    };

  const handleCreateTask =
    async (taskData) => {
      try {
        await createTask(
          taskData
        );

        fetchTasks();
      } catch (error) {
        console.error(
          "Failed to create task",
          error
        );
      }
    };

  const handleToggleTask =
    async (id) => {
      try {
        await toggleTask(id);

        fetchTasks();
      } catch (error) {
        console.error(
          error
        );
      }
    };

  const handleDeleteTask =
    async (id) => {
      const confirmDelete =
        window.confirm(
          "Are you sure you want to delete this task?"
        );

      if (!confirmDelete)
        return;

      try {
        await deleteTask(id);

        fetchTasks();
      } catch (error) {
        console.error(
          error
        );
      }
    };

  const handleEditTask =
    async (taskData) => {
      try {
        await updateTask(
          editingTask.id,
          taskData
        );

        setEditingTask(
          null
        );

        fetchTasks();
      } catch (error) {
        console.error(
          error
        );
      }
    };

  useEffect(() => {
    fetchTasks();
  }, [search]);

  // safe array
  const safeTasks =
    Array.isArray(tasks)
      ? tasks
      : [];

  const completedTasks =
    safeTasks.filter(
      (task) =>
        task.completed
    ).length;

  const activeTasks =
    safeTasks.length -
    completedTasks;

  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <div className="max-w-4xl mx-auto">
        <Header
          total={
            safeTasks.length
          }
          active={
            activeTasks
          }
          completed={
            completedTasks
          }
        />

        <SearchBar
          search={search}
          setSearch={
            setSearch
          }
        />

        <TaskForm
          onSubmit={
            editingTask
              ? handleEditTask
              : handleCreateTask
          }
          editingTask={
            editingTask
          }
          onCancel={() =>
            setEditingTask(
              null
            )
          }
        />

        {loading ? (
          <p className="text-center">
            Loading tasks...
          </p>
        ) : safeTasks.length ===
          0 ? (
          <EmptyState />
        ) : (
          <TaskList
            tasks={
              safeTasks
            }
            onToggle={
              handleToggleTask
            }
            onDelete={
              handleDeleteTask
            }
            onEdit={
              setEditingTask
            }
          />
        )}
      </div>
    </div>
  );
};

export default Home;