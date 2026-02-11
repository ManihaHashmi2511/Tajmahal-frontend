import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { IoMdSettings } from "react-icons/io";
import { LuLayoutDashboard, LuTableProperties } from "react-icons/lu";
import { MdProductionQuantityLimits } from "react-icons/md";
import { NavLink } from "react-router-dom";
import ChangeCredentialsModal from "./ChangeCredentialsModal";
import { BiChevronDown } from "react-icons/bi";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const Sidebar = ({ isOpen, onClose }) => {
  const [openSettings, setOpenSettings] = useState(false);
  const [showChangeModal, setShowChangeModal] = useState(false);

  return (
    <>
      {isOpen && <div className="sidebar-overlay" onClick={onClose}></div>}

      <aside className={`admin-sidebar ${!isOpen ? "closed" : ""}`}>
        {/* Mobile Close Button */}
        <div className="sidebar-close-btn">
          <HiOutlineX onClick={onClose} />
        </div>
        <nav className="admin-nav">
          <NavLink
            to="/admin/Dashboard"
            end
            className={({ isActive }) =>
              `d-flex gap-3 ${isActive ? "active" : ""}`
            }
          >
            <span>
              <LuLayoutDashboard className="sideIcon" />
            </span>
            Dashboard
          </NavLink>

          <NavLink
            to="/admin/Products"
            className={({ isActive }) =>
              `d-flex gap-3 ${isActive ? "active" : ""}`
            }
          >
            <span>
              <MdProductionQuantityLimits className="sideIcon" />
            </span>
            Products
          </NavLink>

          <div className="sideDropdown">
            <a
              onClick={() => setOpenSettings(!openSettings)}
              className="d-flex justify-content-between "
              style={{ cursor: "pointer" }}
            >
              <div className="d-flex gap-3 ">
                <span>
                  <IoMdSettings className="sideIcon" />
                </span>
                Setting
              </div>
              <span>
                <BiChevronDown className="fs-5" />
              </span>
            </a>
            <div className={`dropdown ${openSettings ? "show" : ""}`}>
              <div
                className="dropdownItem"
                onClick={() => setShowChangeModal(true)}
              >
                Change Email & Password
              </div>
            </div>
          </div>
        </nav>
        {showChangeModal && (
          <ChangeCredentialsModal onClose={() => setShowChangeModal(false)} />
        )}
      </aside>
    </>
  );
};

export default Sidebar;
