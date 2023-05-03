import React from "react";
import { Routes, Route } from "react-router-dom";
import Dash from "./Dash";
import Navbar from "./Nav";
import Sidebar from "./Side";
import "./App.css"
import Project from "./Project";
import Task from "./Task";
import Customer from "./customer";

function App() {
  return (
    <div>
      <Navbar/>
      <div className="container-fluid" id="main">
        <div className="row row-offcanvas row-offcanvas-left">
          <Sidebar />
          <div className="col main-menu text-dark">
            <Routes className="extra-margin ms-5">
              <Route path="/" element={<Dash />} />
              <Route path="/task" element={<Task />} />
              <Route path="/project" element={<Project />} />
              <Route path="/customer" element={<Customer />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
