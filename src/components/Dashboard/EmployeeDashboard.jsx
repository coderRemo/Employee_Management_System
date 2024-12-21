import Header from "../Header";
import TaskListNumbers from "../others/TaskListNumbers";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = ({ userDetail }) => {
  return (
    <div className="p-10 h-screen">
      <Header data={userDetail} />
      <TaskListNumbers data={userDetail} />
      <TaskList data={userDetail} />
    </div>
  );
};

export default EmployeeDashboard;
