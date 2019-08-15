import React, { Component } from "react";
import { Task } from "./Task.js";

export class List extends Component {
  renderTasks = () => {
    const { tasks } = this.props;
    return tasks.map(task => {
      return <Task key={task.id} name={task.name} />;
    });
  };
  render() {
    return <ol>{this.renderTasks()}</ol>;
  }
}
