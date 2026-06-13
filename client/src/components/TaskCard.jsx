import { FaTrash, FaEdit, FaCheck } from "react-icons/fa";

const TaskCard = ({ task, onToggle, onDelete, onEdit }) => {
  const isOverdue =
    task.dueDate && new Date(task.dueDate) < new Date() && !task.completed;

  return (
     <div
      className={`bg-white rounded-2xl p-5 shadow-sm border transition hover:shadow-md ${
        isOverdue
          ? "border-red-400"
          : "border-slate-200"
      }`}
    >
      <div className="flex justify-between gap-4">
        <div className="flex-1">
          <h3
            className={`text-lg font-semibold ${
              task.completed
                ? "line-through text-slate-400"
                : "text-slate-800"
            }`}
          >
            {task.title}
          </h3>

          {task.description && (
            <p className="text-slate-500 mt-2">
              {task.description}
            </p>
          )}

          {task.dueDate && (
            <p
              className={`text-sm mt-3 ${
                isOverdue
                  ? "text-red-500 font-medium"
                  : "text-slate-400"
              }`}
            >
              Due:{" "}
              {new Date(
                task.dueDate
              ).toLocaleDateString()}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <button
            onClick={() =>
              onToggle(task.id)
            }
            className={`p-3 rounded-xl ${
              task.completed
                ? "bg-green-100 text-green-700"
                : "bg-slate-100 text-slate-700"
            }`}
          >
            <FaCheck />
          </button>

          <button
            onClick={() =>
              onEdit(task)
            }
            className="p-3 rounded-xl bg-blue-100 text-blue-700"
          >
            <FaEdit />
          </button>

          <button
            onClick={() =>
              onDelete(task.id)
            }
            className="p-3 rounded-xl bg-red-100 text-red-700"
          >
            <FaTrash />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
