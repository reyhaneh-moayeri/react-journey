import React, { useContext, useState } from "react";

const CounterContext = React.createContext();
const CounterContextDispatcher = React.createContext();

const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  return (
    <CounterContext.Provider value={count}>
      <CounterContextDispatcher.Provider value={setCount}>
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
  const setCount = useContext(CounterContextDispatcher);

  const addOne = () => setCount((prevCount) => prevCount + 1);
  const addFive = () => setCount((prevCount) => prevCount + 5);

  return {
    addOne,
    addFive,
  };
};
