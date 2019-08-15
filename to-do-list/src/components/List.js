import React, { Component } from "react";
import { Task } from "./Task.js";

export class List extends Component {
  renderTasks = () => {
    const { tasks } = this.props;
    return tasks.map(task => {
      return <Task key={task.id} task={task.name} />;
    });
  };
  render() {
    return (
      <React.Fragment>
        <ul className="list">{this.renderTasks()}</ul>
      </React.Fragment>
    );
  }
}
