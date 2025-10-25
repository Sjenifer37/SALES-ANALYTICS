import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import axios from "axios";

const Dashboard = () => {
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  const handleLogout = () => {
    axios.get("http://localhost:3000/auth/logout").then((result) => {
      if (result.data.Status) {
        localStorage.removeItem("valid");
        navigate("/");
      }
    });
  };

  return (
    <div className="dashboard-container" style={{ display: "flex" }}>
      {/* Sidebar */}
      <aside
        className="sidebar"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "250px",
          height: "100vh",
          backgroundColor: "#062648ff",
          color: "#fdfcfcff",
          paddingTop: "1rem",
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h5 className="text-center mt-3 mb-4 fw-bold">SMART SALES</h5>
        <ul className="nav flex-column px-3 flex-grow-1">
          <li className="nav-item mb-2">
            <Link to="/dashboard" className="nav-link text-white">
              <i className="fs-4 bi-speedometer2 me-2"></i>
              Dashboard
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link to="/dashboard/employee" className="nav-link text-white">
              <i className="fs-4 bi-people me-2"></i>
              Manage Employees
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link to="/dashboard/category" className="nav-link text-white">
              <i className="fs-4 bi-columns me-2"></i>
              Category
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link to="/dashboard/analytics" className="nav-link text-white">
              <i className="fs-4 bi-graph-up me-2"></i>
              Analytics
            </Link>
          </li>
          <li className="nav-item " onClick={handleLogout}>
            <span
              className="nav-link text-white"
              style={{ cursor: "pointer" }}
            >
              <i className="fs-4 bi-power me-2"></i>
              Logout
            </span>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main
        className="main-content"
        style={{
          marginLeft: "250px",
          width: "calc(100% - 250px)",
          minHeight: "100vh",
          backgroundColor: "#ffffffff", // light background for all pages except analytics
        }}
      >
        {/* Header */}
        <header
          className="header shadow-sm py-2 text-center"
          style={{ backgroundColor: "#062648ff", color: "#fff" }}
        >
          <h4>EMPLOYEE MANAGEMENT SYSTEM</h4>
        </header>

        {/* Page content */}
        <section className="content p-3">
          <Outlet />
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
