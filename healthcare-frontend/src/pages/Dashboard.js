import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom"; // Import Outlet for nested routes
import Layout from "../components/Layout";
import AdminDashboard from "./AdminDashboard";
import CaregiverDashboard from "./CaregiverDashboard";
import DoctorDashboard from "./DoctorDashboard";
import NurseDashboard from "./NurseDashboard";

const Dashboard = () => {
  const { role } = useSelector((state) => state.auth);
  console.log(role)

  const renderDashboard = () => {
    switch (role) {
      case "Admin":
        return <AdminDashboard />;
      case "Caregiver":
        return <CaregiverDashboard />;
      case "Doctor":
        return <DoctorDashboard />;
      case "Nurse":
        return <NurseDashboard />;
      default:
        return <p>Invalid role. Please contact support.</p>;
    }
  };

  return (
    <Layout>
      {/* Nested Outlet will render the components based on the sidebar link clicked */}
      <Outlet />
    </Layout>
  );
};

export default Dashboard;
