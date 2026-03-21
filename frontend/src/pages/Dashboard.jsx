import { Navigate } from "react-router-dom";
import AdminDashboard from "../components/AdminDashboard";
import StudentDashboard from "../components/StudentDashboard";

const Dashboard = () => {

  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (user.role === "admin") {
    return <AdminDashboard />;
  }

  if (user.role === "student") {
    return <StudentDashboard />;
  }

  return <Navigate to="/unauthorized" />;
};

export default Dashboard;