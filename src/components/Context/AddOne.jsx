import React from "react";
import { useCounter, useCounterDispatcher } from "./CounterProvider";

const AddOne = () => {
  const count = useCounter();
  const actions = useCounterDispatcher();

  return (
    <div>
      <h3>counter is {count}</h3>
      <button onClick={actions.addOne}>add one</button>
      <button onClick={actions.addFive}>add five</button>
    </div>
  );
};

export default AddOne;
