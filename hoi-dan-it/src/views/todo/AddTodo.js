import React, { Component } from "react";
import { toast } from "react-toastify";
export default class AddTodo extends Component {
  state = {
    title: "",
  };
  handleOnChangeTitle = (e) => {
    this.setState({ title: e.target.value });
  };
  handleAddToto = () => {
    if (!this.state.title) {
      toast.error("Error");
      return;
    }
    let todo = {
      id: ~~Math.floor(Math.random() * 1000),
      title: this.state.title,
    };
    this.props.addTodo(todo);
  };
  render() {
    let { title } = this.state;
    return (
      <div className="add-todo">
        <input
          type="text"
          value={title}
          onChange={(e) => {
            this.handleOnChangeTitle(e);
          }}
        />
        <button
          onClick={() => {
            this.handleAddToto();
          }}
        >
          Add
        </button>
      </div>
    );
  }
}
