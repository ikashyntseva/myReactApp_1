import React from "react";
import { connect } from "react-redux";
import { List } from "../components/List";

class ListContainer extends React.Component {
  render() {
    const { tasks } = this.props;

    if (tasks.length) {
      return <List tasks={tasks} />;
    }
    return null;
  }
}

const mapStoreToProps = store => {
  return {
    tasks: store.listData.tasks
  };
};

export default connect(mapStoreToProps)(ListContainer);
