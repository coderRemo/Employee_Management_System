import { TodayDate } from "../../utils/constant";

const TaskList = () => {
  return (
    <div
      id="tasklist"
      className="w-full h-[50%] py-5 mt-10 flex flex-nowrap items-center justify-start gap-5 overflow-x-auto"
    >
      <div className="flex-shrink-0 h-[300px] w-[300px] bg-yellow-500 rounded-xl p-5">
        <div className="flex justify-between items-center text-sm">
          <p className="bg-red-500 rounded-md font-bold px-3 py-1">High</p>
          <p>
            <TodayDate />
          </p>
        </div>
        <h2 className="mt-5 text-xl font-semibold">YouTube</h2>
        <p className="text-sm mt-2">
          Develop an Youtube clone, that will show all its features. Use react
          and redux. Develop an Youtube clone, that will show all its features.
          Use react and redux.
        </p>
      </div>

      <div className="flex-shrink-0 h-[300px] w-[300px] bg-green-500 rounded-xl p-5">
        <div className="flex justify-between items-center text-sm">
          <p className="bg-red-500 rounded-md font-bold px-3 py-1">High</p>
          <p>
            <TodayDate />
          </p>
        </div>
        <h2 className="mt-5 text-xl font-semibold">YouTube</h2>
        <p className="text-sm mt-2">
          Develop an Youtube clone, that will show all its features. Use react
          and redux. Develop an Youtube clone, that will show all its features.
          Use react and redux.
        </p>
      </div>

      <div className="flex-shrink-0 h-[300px] w-[300px] bg-red-400 rounded-xl p-5">
        <div className="flex justify-between items-center text-sm">
          <p className="bg-red-500 rounded-md font-bold px-3 py-1">High</p>
          <p>
            <TodayDate />
          </p>
        </div>
        <h2 className="mt-5 text-xl font-semibold">YouTube</h2>
        <p className="text-sm mt-2">
          Develop an Youtube clone, that will show all its features. Use react
          and redux. Develop an Youtube clone, that will show all its features.
          Use react and redux.
        </p>
      </div>

      <div className="flex-shrink-0 h-[300px] w-[300px] bg-blue-500 rounded-xl p-5">
        <div className="flex justify-between items-center text-sm">
          <p className="bg-red-500 rounded-md font-bold px-3 py-1">High</p>
          <p>
            <TodayDate />
          </p>
        </div>
        <h2 className="mt-5 text-xl font-semibold">YouTube</h2>
        <p className="text-sm mt-2">
          Develop an Youtube clone, that will show all its features. Use react
          and redux. Develop an Youtube clone, that will show all its features.
          Use react and redux.
        </p>
      </div>
    </div>
  );
};

export default TaskList;
