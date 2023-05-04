import React, { useContext, useReducer } from "react";

const CounterContext = React.createContext();
const CounterContextDispatcher = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return state + action.value;
  }
};

const CounterProvider = ({ children }) => {
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <CounterContext.Provider value={count}>
      <CounterContextDispatcher.Provider value={dispatch}>
        {children}
      </CounterContextDispatcher.Provider>
    </CounterContext.Provider>
  );
};

export default CounterProvider;

export const useCounter = () => {
  return useContext(CounterContext);
};

export const useCounterDispatcher = () => {
  return useContext(CounterContextDispatcher);
};
