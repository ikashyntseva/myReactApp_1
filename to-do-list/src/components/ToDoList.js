import React, { Component } from "react";
import AddTaskContainer from "../containers/AddTaskContainer";
import ListContainer from "../containers/ListContainer";

class ToDoList extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>To Do List</h1>
        <AddTaskContainer />
        <ListContainer />
      </React.Fragment>
    );
  }
}

export default ToDoList;
