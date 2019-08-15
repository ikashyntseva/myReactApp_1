import React, { Component } from "react";

export class Task extends Component {
  render() {
    const { name } = this.props;
    return (
      <li>
        <label>
          <span>{name}</span>
          <input type="checkbox" />
        </label>
      </li>
    );
  }
}
