import React, { useContext } from "react";
import { CounterContext, CounterContextDispatcher } from "./CounterProvider";

const AddOne = () => {
  const count = useContext(CounterContext);
  const setCount = useContext(CounterContextDispatcher);
  return (
    <div>
      <h3>counter is {count}</h3>
      <button onClick={() => setCount(count + 1)}>add one</button>
    </div>
  );
};

export default AddOne;
