import { useEffect, useState } from "react";

const FunctionalCounter = () => {
  const [count, setCounter] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log(count, name);
  });

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };

  const incrementCount = () => {
    setCounter((prevState) => {
      return prevState + 1;
    });
  };
  return (
    <div>
      <input type="text" onChange={(e) => nameChangeHandler(e)} value={name} />
      <button onClick={incrementCount}>count : {count}</button>
    </div>
  );
};

export default FunctionalCounter;
