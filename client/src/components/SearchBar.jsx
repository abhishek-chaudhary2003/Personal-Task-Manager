const SearchBar = ({
  search,
  setSearch
}) => {
  return (
    <input
      type="text"
      placeholder="Search tasks..."
      value={search}
      onChange={(e) =>
        setSearch(e.target.value)
      }
      className="w-full p-4 rounded-xl border border-slate-200 bg-white shadow-sm outline-none focus:ring-2 focus:ring-slate-300 mb-6"
    />
  );
};

export default SearchBar;