const TaskCard = ({ task }) => {
  const isOverdue =
    task.dueDate &&
    new Date(task.dueDate) <
      new Date() &&
    !task.completed;

  return (
    <div
      className={`bg-white rounded-xl p-5 shadow-sm border transition ${
        isOverdue
          ? "border-red-400"
          : "border-transparent"
      }`}
    >
      <div className="flex justify-between items-start">
        <div>
          <h3
            className={`text-lg font-semibold ${
              task.completed
                ? "line-through text-slate-400"
                : ""
            }`}
          >
            {task.title}
          </h3>

          {task.description && (
            <p className="text-slate-500 mt-1">
              {task.description}
            </p>
          )}

          {task.dueDate && (
            <p className="text-sm text-slate-400 mt-2">
              Due:{" "}
              {new Date(
                task.dueDate
              ).toLocaleDateString()}
            </p>
          )}
        </div>

        <span
          className={`text-xs px-3 py-1 rounded-full ${
            task.completed
              ? "bg-green-100 text-green-700"
              : "bg-blue-100 text-blue-700"
          }`}
        >
          {task.completed
            ? "Completed"
            : "Pending"}
        </span>
      </div>
    </div>
  );
};

export default TaskCard;