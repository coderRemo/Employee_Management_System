import { TodayDate } from "../../utils/constant";

const CompleteTask = () => {
  return (
    <div className="flex-shrink-0 h-[300px] w-[300px] bg-red-400 rounded-xl p-5">
      <div className="flex justify-between items-center text-sm">
        <p className="bg-red-500 rounded-md font-bold px-3 py-1">High</p>
        <p>
          <TodayDate />
        </p>
      </div>
      <h2 className="mt-5 text-xl font-semibold">YouTube</h2>
      <p className="text-sm mt-2">
        Develop an Youtube clone, that will show all its features. Use react and
        redux. Develop an Youtube clone, that will show all its features. Use
        react and redux.
      </p>

      <div className="flex items-center justify-between mt-3 text-sm font-medium">
        <button className="bg-green-500 cursor-pointer px-2 py-1 rounded hover:bg-green-600">
          Mark as Completed
        </button>
        <button className="bg-red-500 cursor-pointer px-2 py-1 rounded hover:bg-red-600">
          Mark as Failed
        </button>
      </div>
    </div>
  );
};

export default CompleteTask;
