import { useState } from "react";

const TaskForm = ({ onSubmit, editingTask, onCancel }) => {
  const [formData, setFormData] = useState({
    title: editingTask?.title || "",
    description: editingTask?.description || "",
    dueDate: editingTask?.dueDate || "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(formData);

    // clear form only when adding
    if (!editingTask) {
      setFormData({
        title: "",
        description: "",
        dueDate: "",
      });
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">
      <h2 className="text-xl font-semibold mb-4">
        {editingTask ? "Edit Task" : "Add New Task"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Task title"
          value={formData.title}
          onChange={handleChange}
          required
          className="w-full border border-slate-200 rounded-xl p-3 outline-none focus:ring-2 focus:ring-slate-300"
        />

        <textarea
          name="description"
          placeholder="Description (optional)"
          value={formData.description}
          onChange={handleChange}
          className="w-full border border-slate-200 rounded-xl p-3 outline-none focus:ring-2 focus:ring-slate-300 resize-none"
          rows={3}
        />

        <input
          type="date"
          name="dueDate"
          value={formData.dueDate}
          onChange={handleChange}
          className="w-full border border-slate-200 rounded-xl p-3 outline-none focus:ring-2 focus:ring-slate-300"
        />

        <div className="flex gap-3">
          <button
            type="submit"
            className="bg-slate-900 text-white px-5 py-3 rounded-xl hover:opacity-90 transition"
          >
            {editingTask ? "Update Task" : "Add Task"}
          </button>

          {editingTask && (
            <button
              type="button"
              onClick={onCancel}
              className="border border-slate-300 px-5 py-3 rounded-xl"
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
