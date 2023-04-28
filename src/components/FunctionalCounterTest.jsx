import { useState, useEffect } from "react";

const FunctionalCounterTest = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const intreval = setInterval(() => {
      console.log("reyhaneh");
      setCounter(counter + 1);
    }, 1000);

    return () => {
      clearInterval(intreval);
    };
  }, []);
  return <div>hi reyhaneh from functional component</div>;
};

export default FunctionalCounterTest;
