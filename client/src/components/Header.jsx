const Header = ({
  total,
  active,
  completed
}) => {
  return (
    <div className="mb-8">
      <h1 className="text-4xl font-bold text-center text-slate-800">
        Personal Task Manager
      </h1>

      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="bg-white p-4 rounded-xl shadow-sm text-center">
          <h3 className="text-slate-500">
            Total
          </h3>

          <p className="text-2xl font-bold">
            {total}
          </p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow-sm text-center">
          <h3 className="text-slate-500">
            Active
          </h3>

          <p className="text-2xl font-bold text-blue-600">
            {active}
          </p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow-sm text-center">
          <h3 className="text-slate-500">
            Completed
          </h3>

          <p className="text-2xl font-bold text-green-600">
            {completed}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;