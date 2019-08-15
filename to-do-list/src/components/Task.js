import React, { Component } from "react";

export class Task extends Component {
  render() {
    const { task } = this.props;
    return (
      <li className="task">
        <label>
          <span>{task}</span>
          <input type="checkbox" />
        </label>
      </li>
    );
  }
}
