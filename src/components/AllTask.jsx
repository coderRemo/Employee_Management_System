const AllTask = () => {
  return (
    <div
      id="tasklist"
      className="bg-customDark mt-5 pl-11 pr-11 rounded p-5 h-48 overflow-auto"
    >
      <div className="flex items-start justify-between bg-red-400 mb-2 py-2 px-4 rounded-md">
        <p>Name</p>
        <p>Task</p>
        <p>Status</p>
      </div>

      <div className="flex items-start justify-between bg-green-400 mb-2 py-2 px-4 rounded-md">
        <p>Name</p>
        <p>Task</p>
        <p>Status</p>
      </div>

      <div className="flex items-start justify-between bg-blue-400 mb-2 py-2 px-4 rounded-md">
        <p>Name</p>
        <p>Task</p>
        <p>Status</p>
      </div>

      <div className="flex items-start justify-between bg-yellow-400 mb-2 py-2 px-4 rounded-md">
        <p>Name</p>
        <p>Task</p>
        <p>Status</p>
      </div>
    </div>
  );
};

export default AllTask;
