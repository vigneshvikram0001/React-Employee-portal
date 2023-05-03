import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

function Customer() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/users")
      .then((res) => setData(res.data.users))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md bg-white rounded shadow-sm overall">
          <div className="pro-head d-flex justify-content-between align-items-center rounded">
            <h2 className="pro-head-title">Recent Customers</h2>
          </div>
          <hr />
          <div className="pro-details">
            <table class="table table-borderless">
              <thead>
                <tr>
                  <th scope="col" className="head-title">
                    Customer Id
                  </th>
                  <th scope="col" className="head-title">
                    Customer Name
                  </th>
                  <th scope="col" className="head-title">
                    Department
                  </th>
                  <th scope="col" className="head-title">
                    Email Id
                  </th>
                </tr>
              </thead>
              <tbody className="customer">
                {data ? (
                  data.map((user) => {
                    return (
                      <tr>
                        <td>{user.height}</td>
                        <td>{user.firstName}</td>
                        <td>{user.company.department}</td>
                        <td>{user.email}</td>
                      </tr>
                    );
                  })
                ) : (
                  <div className="loader-back">
                    <Box className="loaders">
                      <CircularProgress />
                    </Box>
                  </div>
                )}
                {/* <tr>
                  <td className="cus-img">
                    <img src="" alt="avatar" />
                  </td>
                  <td>firstname</td>
                  <td>24/03/2023</td>
                  <td>id</td>
                </tr> */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Customer;

// const ApiCall = () => {
//   fetch("https://dummyjson.com/users")
//     .then((response) => response.json())
//     .then((json) =>
//       json.users.map((detail) => {
//         const firstName = detail.firstName;
//         const id = detail.id;
//         const email = detail.email;
//         const image = detail.image;
//         const gender = detail.gender;
//       })
//     );
// }
