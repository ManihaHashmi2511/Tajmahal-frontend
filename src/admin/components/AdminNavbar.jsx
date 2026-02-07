import { useState, useRef, useEffect } from "react";
import { FaUser } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import logo from '../../../public/images/Tajmahal logo.png';
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { img } from "framer-motion/client";
import { CgProfile } from "react-icons/cg";
import { MdLogout } from "react-icons/md";
import { useLocation } from "react-router-dom";

const AdminNavbar = ({
  toggleSidebar,
  isSidebarOpen,
}) => {
  const [showNotify, setShowNotify] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [search, setSearch] = useState("");
  const location = useLocation();

   const pathName = location.pathname.split("/").pop();

  const pageTitle =
    pathName.charAt(0).toUpperCase() + pathName.slice(1);

  const notifyRef = useRef(null);
  const profileRef = useRef(null);

  // Close popovers on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        notifyRef.current &&
        !notifyRef.current.contains(e.target) &&
        profileRef.current &&
        !profileRef.current.contains(e.target)
      ) {
        setShowNotify(false);
        setShowProfile(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  

  return (
    <header className="admin-navbar">
      {/* LEFT SIDE */}
      <div className="d-flex align-items-center gap-3">


        {/* Logo */}
        <div className="admin-logo">
          <img
            src={logo}
            alt="Logo"
            className="img-fluid"
          />
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="admin-nav-actions ">

        <h5 className="mb-0 admin-title fs-4 text-muted">
        Pages / <span className="text-dark">{pageTitle}</span>
        </h5>
        {/* 🔍 Search */}
        {/* <div
          className="inputDiv"
          style={{
            border: "1px solid lightgray",
            padding: "2px 10px 3px 7px",
            borderRadius: "20px",
          }}
        >
          <input
            type="search"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ border: "none", outline: "none" }}
          />
          <IoSearchOutline className="fs-5 text-black-50" />
        </div> */}

        {/* 🔔 Notifications */}
        {/* <span
          className="nav-icons position-relative"
          ref={notifyRef}
          onClick={() => {
            setShowNotify(!showNotify);
            setShowProfile(false);
          }}
        >
          <IoMdNotifications className="fs-5 nav-icon" />

          {showNotify && (
            <div className="nav-popover">
              <h6>Notifications</h6>

              {[
                { name: "Ali Khan", msg: "Placed a new order", img: maleProfile1 },
                { name: "Sara Ahmed", msg: "Sent a message", img: femaleProfile1 },
                { name: "Usman", msg: "Viewed product", img: maleProfile2 },
                { name: "Ayesha", msg: "Requested details", img: femaleProfile2 },
              ].map((n, i) => (
                <div className="notify-row" key={i}>
                  <div className="notify-img">
                    <img src={n.img} alt="user" />
                    <span className="dot"></span>
                  </div>
                  <div>
                    <strong>{n.name}</strong>
                    <p>{n.msg}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </span> */}

        {/* 👤 Profile */}
        {/* <span
          className="nav-icons position-relative"
          ref={profileRef}
          onClick={() => {
            setShowProfile(!showProfile);
            setShowNotify(false);
          }}
        >
          <FaUser className="fs-5 nav-icon" />

          {showProfile && (
            <div className="nav-popover profile-popover">
              <img
                src={femaleProfile3}
                alt="profile"
                className="rounded-circle img-fluid  mb-2"
              />
              <h6 className="mb-0">Melissa Doe</h6>
              <small className="text-muted">Admin</small>

              <hr />
              
                <button className="popover-btn"><CgProfile className="me-2 fs-5" />View Profile</button>
              <button className="popover-btn text-danger"><MdLogout className="me-2 fs-5"/>Logout</button>
              
            </div>
          )}
        </span> */}
         {/* 🍔 / ❌ Mobile Toggle Button */}
          <button className="mobile-menu-btn" onClick={toggleSidebar}>
            {isSidebarOpen ? <HiOutlineX /> : <HiOutlineMenu />}
          </button>
      </div>
    </header>
  );
};

export default AdminNavbar;
