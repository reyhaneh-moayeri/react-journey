import React from "react";
import { useCounter, useCounterDispatcher } from "./CounterProvider";

const AddOne = () => {
  const count = useCounter();
  const dispatch = useCounterDispatcher();

  return (
    <div>
      <h3>counter is {count}</h3>
      <button onClick={() => dispatch({ type: "add", value: 1 })}>
        add one
      </button>
      <button onClick={() => dispatch({ type: "add", value: 5 })}>
        add five
      </button>
    </div>
  );
};

export default AddOne;
