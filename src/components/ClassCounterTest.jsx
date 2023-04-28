import React from "react";

class ClassCounterTest extends React.Component {
  state = {
    counter: 0,
  };
  componentDidMount() {
    this.timer = setInterval(() => {
      console.log("hi reyhaneh");
      this.setState({ counter: this.state.counter + 1 });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    return <div>hi reyhaneh</div>;
  }
}

export default ClassCounterTest;
