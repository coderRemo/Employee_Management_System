import AllTask from "../AllTask";
import CreateTask from "../CreateTask";
import Header from "../Header";

const AdminDashboard = () => {
  return (
    <div className="p-10 h-screen">
      <Header />
      <CreateTask />
      <AllTask />
    </div>
  );
};

export default AdminDashboard;
