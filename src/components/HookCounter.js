import React, { useState } from "react";
// const HookCounter = () => {
//   const [counter, setCounter] = useState(0);

//   function addOneHandler() {
//     setCounter(counter + 1);
//   }

//   function addFiveHandler() {
//     for (let i = 0; i < 5; i++) {
//       setCounter((prevState) => prevState + 1);
//     }
//   }
//   return (
//     <div>
//       <h1>{counter}</h1>
//       <button onClick={addOneHandler}>add one</button>
//       <button onClick={addFiveHandler}>add five</button>
//     </div>
//   );
// };

class HookCounter extends React.Component {
  state = {
    counter: 0,
  };

  addOneHandler = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  addFiveHandler = () => {
    for (let i = 0; i < 5; i++) {
      this.setState((prevState) => {
        return {
          counter: prevState.counter + 1,
        };
      });
    }
  };

  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.addOneHandler}>add one</button>
        <button onClick={this.addFiveHandler}>add five</button>
      </div>
    );
  }
}

export default HookCounter;
