const TaskListNumbers = () => {
  return (
    <div className="flex flex-wrap lg:flex-nowrap gap-5 justify-around mt-10 h-40">
      <div className="bg-pink-400 w-[45%] rounded-md p-10">
        <p className="text-4xl font-semibold">0</p>
        <p className="font-medium text-xl">New Task</p>
      </div>
      <div className="bg-green-400 w-[45%] rounded-md p-10">
        <p className="text-4xl font-semibold">0</p>
        <p className="font-medium text-xl">Completed Task</p>
      </div>
      <div className="bg-blue-400 w-[45%] rounded-md p-10">
        <p className="text-4xl font-semibold">0</p>
        <p className="font-medium text-xl">Accepted Task</p>
      </div>
      <div className="bg-yellow-400 w-[45%] rounded-md p-10">
        <p className="text-4xl font-semibold">0</p>
        <p className="font-medium text-xl">Failed Task</p>
      </div>
    </div>
  );
};

export default TaskListNumbers;
