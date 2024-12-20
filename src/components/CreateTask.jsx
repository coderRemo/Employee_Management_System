const CreateTask = () => {
  return (
    <div className="mt-10">
      <form className="flex flex-wrap w-full items-start justify-between">
        <div className="w-1/2">
          <label className="text-sm text-gray-300 mb-0.5 flex flex-col">
            Task Title
            <input
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="Make a UI Design"
            />
          </label>

          <label className="text-sm text-gray-300 mb-0.5 flex flex-col">
            Date
            <input
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="date"
            />
          </label>

          <label className="text-sm text-gray-300 mb-0.5 flex flex-col">
            Assign To
            <input
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="Employee Name"
            />
          </label>

          <label className="text-sm text-gray-300 mb-0.5 flex flex-col">
            Category
            <input
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="Design, Dev, etc."
            />
          </label>
        </div>

        <div className="w-2/5 flex flex-col items-start">
          <p className="text-sm text-gray-300 mb-0.5">Description</p>
          <textarea className="w-full h-[10.5rem] text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"></textarea>

          <button className="w-full text-sm font-bold border px-5 py-3 rounded-md border-emerald-500 bg-emerald-500 hover:bg-emerald-600 hover:border-emerald-600 transition duration-300">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
