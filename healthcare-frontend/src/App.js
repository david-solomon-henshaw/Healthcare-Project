import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard"; // Updated to use Dashboard component

// Import your specific sub-pages for each role
import AdminDashboardPage from "./pages/AdminDashboard"; // Example page
import CaregiverDashboardPage from "./pages/CaregiverDashboard"; // Example page
import DoctorDashboardPage from "./pages/DoctorDashboard"; // Example page
import NurseDashboardPage from "./pages/NurseDashboard"; // Example page

// Import ProtectedRoute
import ProtectedRoute from "./components/ProtectedRoute"; // Path to the ProtectedRoute component

function App() {
  return (
    <Router>
      <Routes>
        {/* Main Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />

        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute
              element={<Dashboard />} // Protected route for Dashboard
            />
          }
        >
          <Route path="admin" element={<AdminDashboardPage />} />
          <Route path="caregiver" element={<CaregiverDashboardPage />} />
          <Route path="doctor" element={<DoctorDashboardPage />} />
          <Route path="nurse" element={<NurseDashboardPage />} />
        </Route>

        {/* Catch-all Route */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
