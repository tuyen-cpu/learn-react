import React, { Component } from "react";
import AddTodo from "./AddTodo";
import { toast } from "react-toastify";
class TodoList extends Component {
  state = {
    todoList: [
      { id: "t1", title: "my choir 1" },
      { id: "t2", title: "my choir 2" },
      { id: "t3", title: "my choir 3" },
    ],
  };
  addNewTodo = (todo) => {
    this.setState({
      todoList: [...this.state.todoList, todo],
    });
    toast.success("ok men");
  };
  render() {
    let { todoList } = this.state;
    return (
      <div className="todo-list-container">
        <AddTodo addTodo={this.addNewTodo} />
        {todoList &&
          todoList.length > 0 &&
          todoList.map((item, index) => {
            return (
              <div className="" key={item.id}>
                <span>{item.title}</span>
              </div>
            );
          })}
      </div>
    );
  }
}

export default TodoList;
