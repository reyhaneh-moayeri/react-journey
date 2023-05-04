import { useReducer } from "react";
const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return state + action.value;
    case "decrement":
      return state - action.value;
    case "reset":
      return 0;
    default:
      throw new Error();
  }
};

const CounterOne = () => {
  const [count, dispatch] = useReducer(reducer, 0);

  const [countTwo, dispatchTwo] = useReducer(reducer, 0);

  return (
    <div>
      <h2>firstCount is {count}</h2>
      <button onClick={() => dispatch({ type: "add", value: 1 })}>
        add one
      </button>
      <button onClick={() => dispatch({ type: "add", value: 5 })}>
        add five
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        decrement
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
      <h2>secondCount is {countTwo}</h2>

      <button onClick={() => dispatchTwo({ type: "add", value: 1 })}>
        add one 2
      </button>
      <button onClick={() => dispatchTwo({ type: "decrement", value: 1 })}>
        decrement 2
      </button>
      <button onClick={() => dispatchTwo({ type: "reset" })}>reset</button>
    </div>
  );
};

export default CounterOne;
