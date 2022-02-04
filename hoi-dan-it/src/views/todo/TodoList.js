import React, { Component } from "react";
import AddTodo from "./AddTodo";
import { toast } from "react-toastify";
import "./todoList.scss";
class TodoList extends Component {
  state = {
    todoList: [
      { id: "t1", title: "my choir 1" },
      { id: "t2", title: "my choir 2" },
      { id: "t3", title: "my choir 3" },
    ],
    editItem: {},
  };
  addNewTodo = (todo) => {
    this.setState({
      todoList: [...this.state.todoList, todo],
    });
    toast.success("ok men");
  };
  handleDeleteItem(todo) {
    let currentList = this.state.todoList;
    currentList = currentList.filter((item) => item.id !== todo.id);
    this.setState({ todoList: currentList });
    toast.success(`Delete item ${todo.title} succeed!`);
  }
  handleEditItem(todo) {
    let { editItem, todoList } = this.state;
    let isEdit = !(Object.keys(editItem).length === 0);
    console.log(editItem);
    if (editItem.id === todo.id) {
      let todoArr = [...todoList];
      let index = todoArr.findIndex((item) => item.id === todo.id);
      todoArr[index] = editItem;
      this.setState({
        todoList: todoArr,
        editItem: {},
      });
      toast.success("Update item succeed!");
      return;
    }
    this.setState({ editItem: todo });
  }
  handleOnchangeEditTodo(e) {
    let item = { ...this.state.editItem };
    item.title = e.target.value;
    this.setState({
      editItem: item,
    });
  }
  render() {
    let { todoList, editItem } = this.state;

    let isEdit = !(Object.keys(editItem).length === 0);
    console.log(editItem);
    return (
      <div className="todo-list-container">
        <AddTodo addTodo={this.addNewTodo} />
        {todoList &&
          todoList.length > 0 &&
          todoList.map((item, index) => {
            return (
              <div className="item" key={item.id}>
                {isEdit === false ? (
                  <span className="title">{item.title}</span>
                ) : (
                  <>
                    {editItem.id === item.id ? (
                      <input
                        className="title"
                        value={editItem.title}
                        onChange={(e) => this.handleOnchangeEditTodo(e)}
                      />
                    ) : (
                      <span className="title">{item.title}</span>
                    )}
                  </>
                )}
                <button
                  className="btn btnEdit"
                  onClick={() => this.handleEditItem(item)}
                >
                  {isEdit === true && editItem.id === item.id ? "Save" : "Edit"}
                </button>
                <button
                  className="btn btnDelete"
                  onClick={() => this.handleDeleteItem(item)}
                >
                  Delete
                </button>
              </div>
            );
          })}
      </div>
    );
  }
}

export default TodoList;
