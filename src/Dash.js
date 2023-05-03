import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Dash() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row g-3">
          <div className="col-md-3 m-1">
            <Link
              to="/customer"
              className="p-3 shadow-sm d-flex justify-content-around align-items-center rounded dash-list"
            >
              <div>
                <h3 className="fs-6 dash-list-head">55</h3>
                <p className="fs-5 dash-list-name">Customers</p>
              </div>
              <i className="fas fa-users dash-list-icon"></i>
            </Link>
          </div>
          <div className="col-md-3 m-1">
            <Link
              to="/task"
              className="p-3 shadow-sm d-flex justify-content-around align-items-center rounded dash-list"
            >
              <div>
                <h3 className="fs-6 dash-list-head">12</h3>
                <p className="fs-5 dash-list-name">Pending Tasks</p>
              </div>
              <i className="fas fa-clipboard dash-list-icon"></i>
            </Link>
          </div>
          <div className="col-md-3 m-1">
            <Link
              to="/project"
              className="p-3 shadow-sm d-flex justify-content-around align-items-center rounded dash-list"
            >
              <div>
                <h3 className="fs-6 dash-list-head">132</h3>
                <p className="fs-5 dash-list-name">Completed Projects</p>
              </div>
              <i className="fas fa-check-double dash-list-icon"></i>
            </Link>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row ">
          <div className="col-md-7 bg-white m-4 rounded shadow-sm">
            <div className="pro-head d-flex justify-content-between align-items-center rounded">
              <h2 className="pro-head-title">Recent Projects</h2>
              <Link to="/project">
                <button className="btn">
                  See all <i className="fas fa-arrow-right"></i>
                </button>
              </Link>
            </div>
            <hr />
            <div className="pro-details">
              <table class="table table-borderless">
                <thead>
                  <tr>
                    <th scope="col">Project Title</th>
                    <th scope="col">Due Date</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>React Frontend</td>
                    <td>24/03/2023</td>
                    <td style={{ color: "orangered" }}>Pending</td>
                  </tr>
                  <tr>
                    <td>Php backend</td>
                    <td>01/04/2023</td>
                    <td style={{ color: "Green" }}>Completed</td>
                  </tr>
                  <tr>
                    <td>UI Team</td>
                    <td>05/04/2023</td>
                    <td style={{ color: "orangered" }}>Pending</td>
                  </tr>
                  <tr>
                    <td>Python Application</td>
                    <td>15/04/2023</td>
                    <td style={{ color: "Green" }}>Completed</td>
                  </tr>
                  <tr>
                    <td>Mobile Application</td>
                    <td>01/05/2023</td>
                    <td style={{ color: "Red" }}>Not Stated</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-md-4 bg-white m-4 rounded shadow-sm">
            <div className="pro-head d-flex justify-content-between align-items-center rounded">
              <h2 className="pro-head-title">Customers</h2>
              <Link to="./customer">
              <button className="btn">
                See all <i className="fas fa-arrow-right"></i>
              </button>
              </Link>
            </div>
            <div className="cust-details">
              <ol class="list-group list-group-numbered">
                <li class="list-group-item d-flex justify-content-between align-items-start">
                  <div class="ms-2 me-auto">
                    <div class="fw-bold">Mr.Sathish Kumar</div>
                    Ecommerce Website
                  </div>
                  <span class="badge text-white rounded-pill">
                    <i className="fas fa-user"></i>
                  </span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-start">
                  <div class="ms-2 me-auto">
                    <div class="fw-bold">Ms.Jai Sri</div>
                    Wordpress Application
                  </div>
                  <span class="badge text-white rounded-pill">
                    <i className="fas fa-user"></i>
                  </span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-start">
                  <div class="ms-2 me-auto">
                    <div class="fw-bold">Mr.Sarath</div>
                    Flight portal Application
                  </div>
                  <span class="badge text-white rounded-pill">
                    <i className="fas fa-user"></i>
                  </span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-start">
                  <div class="ms-2 me-auto">
                    <div class="fw-bold">Ms.Subashree</div>
                    Figma UI Design
                  </div>
                  <span class="badge text-white rounded-pill">
                    <i className="fas fa-user"></i>
                  </span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dash;
