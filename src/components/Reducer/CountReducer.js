import { useReducer } from "react";
const reducer = (state, action) => {
  switch (action) {
    case "addOne":
      return state + 1;
    case "addFive":
      return state + 5;
    case "decrement":
      return state - 1;
    default:
      throw new Error();
  }
};

const CounterOne = () => {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h2>count is {count}</h2>
      <button onClick={() => dispatch("addOne")}>add one</button>
      <button onClick={() => dispatch("addFive")}>add five</button>
      <button onClick={() => dispatch("decrement")}>decrement</button>
    </div>
  );
};

export default CounterOne;
