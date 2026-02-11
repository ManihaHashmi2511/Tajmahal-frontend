import Sidebar from "./Sidebar";
import AdminNavbar from "./AdminNavbar";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import Dashboard from "../pages/Dashboard";

export default function AdminLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

const toggleSidebar = () => {
  setIsSidebarOpen(prev => !prev);
};

  return (
    <div className="admin-wrapper">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <div className={`main-content ${isSidebarOpen ? "" : "full"}`}>
        <AdminNavbar   
        toggleSidebar={toggleSidebar}
        isSidebarOpen={isSidebarOpen}
        />
        <Outlet />
        <Dashboard/>   {/* 👈 Dashboard renders HERE */}
      </div>
    </div>
  );
}
