import React from "react";
import "./Style.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div
      className="col-md-2 col-sm-3 col-lg-2 sidebar-offcanvas p-0 vh-100"
      id="sidebar"
      role="navigation"
    >
      <ul className="nav flex-column sticky-top pl-2 pt-5 mt-4">
        <Link to="/" className="nav-item mb-2 side">
          <a className="nav-link text-secondary" href="#dash">
            <i className="fas fa-chart-bar font-weight-bold"></i>{" "}
            <span className="ml-3">Dashboard</span>
          </a>
        </Link>
        <Link to="/task" className="nav-item mb-2 side">
          <a className="nav-link text-secondary" href="#task">
            <i className="fas fa-tasks font-weight-bold"></i>
            <span className="ml-3"> Task</span>
          </a>
        </Link>
        <Link to="/project" className="nav-item mb-2 side">
          <a className="nav-link text-secondary" href="#project">
            <i className="far fa-th-list font-weight-bold"></i>{" "}
            <span className="ml-3">Projects</span>
          </a>
        </Link>
        <Link to="/customer" className="nav-item mb-2 side">
          <a className="nav-link text-secondary" href="#customer">
            <i className="fas fa-users font-weight-bold"></i>{" "}
            <span className="ml-2 px-1">Customers</span>
          </a>
        </Link>
        <Link to="/lead" className="nav-item mb-2 side">
          <a className="nav-link text-secondary" href="#lead">
            <i className="fas fa-calendar-check font-weight-bold"></i>
            <span className="ml-3 px-1"> Lead</span>
          </a>
        </Link>
        <Link to="/support" className="nav-item mb-2 side">
          <a className="nav-link text-secondary" href="#support">
            <i className="fas fa-question-circle font-weight-bold"></i>{" "}
            <span className="ml-3">Support</span>
          </a>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
