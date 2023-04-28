import React, { Component } from "react";

class ClassCounter extends Component {
  state = {
    name: "",
    counter: 0,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.counter !== this.state.counter)
      console.log(`component did update ${this.state.counter}`);
  }
  render() {
    return (
      <div>
        <input
          type="text"
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <button
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >
          Count {this.state.counter}
        </button>
      </div>
    );
  }
}

export default ClassCounter;
