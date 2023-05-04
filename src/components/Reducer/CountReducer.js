import { useReducer } from "react";
const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return { ...state, firstCount: state.firstCount + action.value };
    case "decrement":
      return { ...state, firstCount: state.firstCount - action.value };
    case "add2":
      return { ...state, secondCount: state.secondCount + action.value };
    case "decrement2":
      return { ...state, secondCount: state.secondCount - action.value };
    case "reset":
      return { secondCount: 0, firstCount: 0 };
    default:
      throw new Error();
  }
};

const CounterOne = () => {
  const [count, dispatch] = useReducer(reducer, {
    firstCount: 0,
    secondCount: 0,
  });

  return (
    <div>
      <h2>firstCount is {count.firstCount}</h2>
      <h2>secondCount is {count.secondCount}</h2>
      <button onClick={() => dispatch({ type: "add", value: 1 })}>
        add one
      </button>
      <button onClick={() => dispatch({ type: "add", value: 5 })}>
        add five
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        decrement
      </button>
      <button onClick={() => dispatch({ type: "add2", value: 1 })}>
        add one 2
      </button>
      <button onClick={() => dispatch({ type: "decrement2", value: 1 })}>
        decrement 2
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </div>
  );
};

export default CounterOne;
