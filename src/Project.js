import React from 'react'
import "./App.css"

function Project() {
    return (
        <div className="container-fluid">
        <div className="row">
          <div className="col-md bg-white rounded shadow-sm">
            <div className="pro-head d-flex justify-content-between align-items-center rounded">
              <h2 className="pro-head-title">Recent Projects</h2>
              <button className="btn">
                See all <i className="fas fa-arrow-right"></i>
              </button>
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
                    <td>---</td>
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
                  <tr>
                    <td>Php backend</td>
                    <td>01/04/2023</td>
                    <td style={{ color: "Green" }}>Completed</td>
                  </tr>
                  <tr>
                    <td>Python Application</td>
                    <td>15/04/2023</td>
                    <td style={{ color: "Green" }}>Completed</td>
                  </tr>
                  <tr>
                    <td>Mobile Application</td>
                    <td>15/04/2023</td>
                    <td style={{ color: "orangered" }}>Pending</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Project