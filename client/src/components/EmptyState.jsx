const EmptyState = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-12 text-center">
      <h2 className="text-2xl font-semibold text-slate-700">
        No Tasks Found
      </h2>

      <p className="text-slate-500 mt-2">
        Create your first task to get
        started.
      </p>
    </div>
  );
};

export default EmptyState;