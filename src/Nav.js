import React from "react";
import "./Style.css";

export const Navbar = () => {
  return (
    <nav className="navbar fixed-top bg-white navbar-expand-md navbar-dark mb-3">
      <div className="flex-row d-flex">
        <button
          type="button"
          className="navbar-toggler mr-2 "
          data-toggle="offcanvas"
          title="Toggle responsive left sidebar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="brand-logo">
          <ion-icon name="logo-venmo" className="clo"></ion-icon>
          <a
            className="navbar-brand"
            href="#brand"
            id="navbar-brand"
          >
            SENCHOLA
          </a>
        </div>
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#collapsingNavbar"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="navbar-collapse collapse" id="collapsingNavbar">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item search">
            <input
              type="text"
              placeholder="search something"
              name="search"
            ></input>
            <i className="fas fa-search search-icon"></i>
          </li>
          <li className="nav-item">
            <a className="nav-link waves-effect waves-light text-white"></a>
          </li>
          <li className="nav-item">
            <a className="nav-link waves-effect waves-light text-white">
              <i className="fas fa-user-circle clo"></i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link waves-effect waves-light text-white">
              <i className="fas fa-envelope-open-text clo"></i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link waves-effect waves-light text-white">
              <i className="fas fa-bell clo"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
