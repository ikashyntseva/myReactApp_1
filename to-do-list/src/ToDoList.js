import React, { Component } from "react";
import { AddTask } from "./components/AddTask.js";
import { List } from "./components/List.js";
import "./App.css";

class ToDoList extends Component {
  state = {
    tasks: []
  };
  addTask = taskName => {
    let taskQuantity = this.state.tasks.length;
    const currentTask = { id: ++taskQuantity, name: taskName };
    this.setState({ tasks: [...this.state.tasks, currentTask] });
  };
  render() {
    return (
      <React.Fragment>
        <h1>To Do List</h1>
        <AddTask addTask={this.addTask} />
        <List tasks={this.state.tasks} />
      </React.Fragment>
    );
  }
}

export default ToDoList;
