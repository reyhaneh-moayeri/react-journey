import { useState } from "react";
const HookCounter = () => {
  const [counter, setCounter] = useState(0);

  function addOneHandler() {
    setCounter(counter + 1);
  }

  function addFiveHandler() {
    for (let i = 0; i < 5; i++) {
      setCounter((prevState) => prevState + 1);
    }
  }
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={addOneHandler}>add one</button>
      <button onClick={addFiveHandler}>add five</button>
    </div>
  );
};

export default HookCounter;
