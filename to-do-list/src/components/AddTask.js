import React, { Component } from "react";

export class AddTask extends Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
    this.state = { isDisabled: true };
  }

  handleOnChange = () => {
    this.setState({ isDisabled: !this.input.current.value.length });
  };

  addTask = () => {
    const currentTaskName = this.input.current.value;
    if (currentTaskName.length) {
      this.props.addTask(currentTaskName);
      this.input.current.value = "";
      this.input.current.focus();
      this.setState({ isDisabled: true });
    }
  };

  onEnterPress = e => {
    if (e.keyCode === 13) {
      this.addTask();
    }
  };

  componentDidMount() {
    this.input.current.focus();
  }
  render() {
    return (
      <React.Fragment>
        <input
          type="text"
          placeholder="Task"
          ref={this.input}
          onKeyDown={this.onEnterPress}
          onChange={this.handleOnChange}
        />
        <button onClick={this.addTask} disabled={this.state.isDisabled}>
          Create task
        </button>
      </React.Fragment>
    );
  }
}
