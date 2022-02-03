import React, { Component } from "react";

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "v", count: 0 };
  }
  handleChangeName(e) {
    this.setState({ name: e.target.value });
  }
  handleCount() {
    // this.setState({ count: this.state.count + 1 });
    console.log(this.state);
  }
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.name}
          onChange={(e) => {
            this.handleChangeName(e);
          }}
        />
        <div className="">{this.state.count}</div>
        <button onClick={this.handleCount.bind(this)}>{this.state.name}</button>
      </div>
    );
  }
}

export default Test;
