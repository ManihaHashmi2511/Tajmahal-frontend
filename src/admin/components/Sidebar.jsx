import { CgProfile } from "react-icons/cg";
import { IoMdSettings } from "react-icons/io";
import { LuLayoutDashboard, LuTableProperties } from "react-icons/lu";
import { MdProductionQuantityLimits } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Sidebar = ({ isOpen }) => {
  return (
    <aside className={`admin-sidebar ${!isOpen ? "closed" : ""}`}>
      <nav className="admin-nav">
        <NavLink
          to="/admin/Dashboard"
          end
          className={({ isActive }) =>
            `d-flex gap-3 ${isActive ? "active" : ""}`
          }
        >
          <span><LuLayoutDashboard className="sideIcon" /></span>
          Dashboard
        </NavLink>

        <NavLink
          to="/admin/Products"
          className={({ isActive }) =>
            `d-flex gap-3 ${isActive ? "active" : ""}`
          }
        >
          <span><MdProductionQuantityLimits className="sideIcon" /></span>
          Products
        </NavLink>

        <NavLink
          to="/admin/Table"
          className={({ isActive }) =>
            `d-flex gap-3 ${isActive ? "active" : ""}`
          }
        >
          <span><LuTableProperties className="sideIcon" /></span>
          Tables
        </NavLink>

        <a href="#" className="d-flex gap-3">
          <span><IoMdSettings className="sideIcon" /></span>
          Settings
        </a>

        <a href="#" className="d-flex gap-3">
          <span><CgProfile className="sideIcon" /></span>
          Profile
        </a>
      </nav>
    </aside>
  );
};

export default Sidebar;
