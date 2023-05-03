import React from "react";
import { useState } from "react";
import "./App.css"

function Task() {
  const [showForm, setShowForm] = useState(false);
  const clickButton = (e) => {
    e.preventDefault();
    setShowForm(!showForm);
  };

  return (
    <div>
      <form>
        <button onClick={clickButton} className="create-task-btn">
          Create New Task
        </button>
      </form>
      {showForm && (
        <form className="col-md-5 mt-4 bg-white p-4 rounded shadow-sm" action="/task">
          <div className="form-group">
            <label for="exampleInputEmail1">Enter Task Name</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="create task"
            />
          </div>
          <div className="form-group">
            <label for="exampleFormControlTextarea1">Task Description</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <div class="form-group">
            <label for="exampleFormControlFile1">Attach Task File</label>
            <input
              type="file"
              class="form-control-file"
              id="exampleFormControlFile1"
            />
          </div>
          <select class="custom-select custom-select-sm mb-3">
            <option selected>Select Level</option>
            <option value="1">Low</option>
            <option value="2">Medium</option>
            <option value="3">High</option>
            <option value="3">Urgent</option>
          </select>
          <button type="submit" className="btn text-white" id="task-btn">
            Create
          </button>
        </form>
      )}
    </div>
  );
}

export default Task;
