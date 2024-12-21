import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import { useContext, useEffect, useState } from "react";
import Login from "./components/Login";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedUser, setLoggedUser] = useState(null);
  const authData = useContext(AuthContext);

  useEffect(() => {
    if (authData) {
      const loggedInUser = localStorage.getItem("loggedInUser");

      if (loggedInUser) {
        const userRole = JSON.parse(loggedInUser);
        setUser(userRole.role);

        // If the role is "employee", set the loggedUser with employee details
        if (userRole.role === "employee" && userRole.details) {
          setLoggedUser(userRole.details);
        }
      }
    }
  }, []);

  const handleLogin = (email, password) => {
    if (email === "admin@me.com" && password === "123") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (authData) {
      const employee = authData.employees.find(
        (e) => e.email === email && e.password === password
      );

      if (employee) {
        setUser("employee");
        setLoggedUser(employee);

        // Save employee role and details in localStorage
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", details: employee })
        );
      }
    } else {
      alert("Invalid Credentials!");
    }
  };

  return (
    <div>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user === "admin" ? (
        <AdminDashboard />
      ) : user === "employee" ? (
        <EmployeeDashboard userDetail={loggedUser} />
      ) : null}
    </div>
  );
};

export default App;
