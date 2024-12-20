import CreateTask from "../CreateTask";
import Header from "../Header";

const AdminDashboard = () => {
  return (
    <div className="p-10 h-screen">
      <Header />
      <CreateTask />
    </div>
  );
};

export default AdminDashboard;
