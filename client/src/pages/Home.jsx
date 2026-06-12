import { useEffect, useState } from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import TaskList from "../components/TaskList";
import EmptyState from "../components/EmptyState";
import { getTasks } from "../services/taskApi.js";

const Home = () => {
  const [tasks, setTasks] =
    useState([]);

  const [search, setSearch] =
    useState("");

  const [loading, setLoading] =
    useState(true);

  const fetchTasks = async () => {
    try {
      setLoading(true);

      const response =
        await getTasks(search);

         console.log(response.data);

      setTasks(response.data);
    } catch (error) {
      console.error(
        "Error fetching tasks:",
        error
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, [search]);

  const completedTasks =
    tasks.filter(
      (task) => task.completed
    ).length;

  const activeTasks =
    tasks.length -
    completedTasks;
   
  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <div className="max-w-4xl mx-auto">
        <Header
          total={tasks.length}
          active={activeTasks}
          completed={completedTasks}
        />

        <SearchBar
          search={search}
          setSearch={setSearch}
        />

        {loading ? (
          <p className="text-center">
            Loading tasks...
          </p>
        ) : tasks.length === 0 ? (
          <EmptyState />
        ) : (
          <TaskList tasks={tasks} />
        )}
      </div>
    </div>
  );
};

export default Home;