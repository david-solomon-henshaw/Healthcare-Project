import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaTachometerAlt, FaUserMd, FaStethoscope, FaClipboardList, FaMedkit, FaCog, FaSignOutAlt } from 'react-icons/fa';

// Dynamic navigation configuration based on roles
const navigationConfig = {
  admin: [
    { name: 'Dashboard', path: '/admin/dashboard', icon: <FaTachometerAlt /> },
    { name: 'Manage Users', path: '/admin/users', icon: <FaUserMd /> },
    { name: 'System Settings', path: '/admin/settings', icon: <FaCog /> },
  ],
  nurse: [
    { name: 'Dashboard', path: '/nurse/dashboard', icon: <FaTachometerAlt /> },
    { name: 'Patient Care', path: '/nurse/patients', icon: <FaStethoscope /> },
    { name: 'Appointments', path: '/nurse/appointments', icon: <FaClipboardList /> },
  ],
  caregiver: [
    { name: 'Dashboard', path: '/caregiver/dashboard', icon: <FaTachometerAlt /> },
    { name: 'Patient Support', path: '/caregiver/patients', icon: <FaUserMd /> },
    { name: 'Care Plans', path: '/caregiver/care-plans', icon: <FaStethoscope /> },
  ],
  doctor: [
    { name: 'Dashboard', path: '/doctor/dashboard', icon: <FaTachometerAlt /> },
    { name: 'Patient Records', path: '/doctor/patients', icon: <FaUserMd /> },
    { name: 'Appointments', path: '/doctor/appointments', icon: <FaClipboardList /> },
    { name: 'Medical Records', path: '/doctor/medical-records', icon: <FaStethoscope /> },
  ],
  frontdesk: [
    { name: 'Dashboard', path: '/frontdesk/dashboard', icon: <FaTachometerAlt /> },
    { name: 'Appointments', path: '/frontdesk/appointments', icon: <FaClipboardList /> },
    { name: 'Patient Registration', path: '/frontdesk/register', icon: <FaUserMd /> },
  ],
  patient: [
    { name: 'Dashboard', path: '/patient/dashboard', icon: <FaTachometerAlt /> },
    { name: 'My Appointments', path: '/patient/appointments', icon: <FaClipboardList /> },
    { name: 'Medical History', path: '/patient/records', icon: <FaStethoscope /> },
  ],
  pharmacist: [
    { name: 'Dashboard', path: '/pharmacist/dashboard', icon: <FaTachometerAlt /> },
    { name: 'Pharmacy Inventory', path: '/pharmacist/inventory', icon: <FaMedkit /> },
    { name: 'Prescriptions', path: '/pharmacist/prescriptions', icon: <FaStethoscope /> },
  ],
};

const SideBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  // Get role from Redux auth slice (updated to fetch role from the correct state)
  const role = useSelector((state) => state.auth.role);
  
  // Determine navigation items based on user role
  const navigationItems = role ? navigationConfig[role.toLowerCase()] : [];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Mobile Hamburger Button */}
      <button
        onClick={toggleSidebar}
        type="button"
        className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          />
        </svg>
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } sm:translate-x-0`}
        aria-label="Hospital Sidebar"
      >
        <div className="overflow-y-auto py-5 px-3 h-full bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          {/* Hospital Logo or Name */}
          <div className="flex items-center pl-2.5 mb-5">
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Hospital Dashboard
            </span>
          </div>

          {/* Dynamic Navigation Links */}
          <ul className="space-y-2">
            {navigationItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  {item.icon}
                  <span className="ml-3">{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Bottom Section */}
          <div className="absolute bottom-0 left-0 w-full p-4 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center">
              <div className="mr-4">
                <img 
                  className="w-10 h-10 rounded-full" 
                  src="/default-avatar.png" 
                  alt="User profile" 
                />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  User Name
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 capitalize">
                  {role || 'Role'}
                </p>
              </div>
              <button 
                className="ml-auto text-gray-500 hover:text-gray-900 dark:hover:text-white"
                onClick={() => {/* Logout logic */}}
              >
                <FaSignOutAlt className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div 
          onClick={toggleSidebar}
          className="sm:hidden fixed inset-0 bg-black opacity-50 z-30"
        />
      )}
    </>
  );
};

export default SideBar;
