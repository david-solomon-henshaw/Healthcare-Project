import React from "react";
import SideBar from "./SideBar";

const Layout = ({ children }) => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <SideBar />
      
      {/* Main Content */}
      <main className="flex-1 ml-64 p-4 bg-gray-100"> {/* Added margin to the left to avoid overlap */}
        {children}
      </main>
    </div>
  );
};

export default Layout;
