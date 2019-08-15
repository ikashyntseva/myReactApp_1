import React from "react";
import { connect } from "react-redux";
import { AddTask } from "../components/AddTask";
import { inputTask } from "../actions/AddActions";
import { handleAddTask } from "../actions/AddActions";

class AddTaskContainer extends React.Component {
  render() {
    const { listData, handleAddTask, inputTask } = this.props;
    return (
      <AddTask
        handleAddTask={handleAddTask}
        inputTask={inputTask}
        listData={listData}
      />
    );
  }
}

const mapStoreToProps = store => {
  return {
    listData: store.listData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    inputTask: task => dispatch(inputTask(task)),
    handleAddTask: data => dispatch(handleAddTask(data))
  };
};

export default connect(
  mapStoreToProps,
  mapDispatchToProps
)(AddTaskContainer);
