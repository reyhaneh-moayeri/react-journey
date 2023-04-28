import { useState } from "react";

const Wrapper = (WrappedComponent, className) => {
  const UpdatedComponent = (props) => {
    const [count, setCounter] = useState(0);
    const incrementCount = () => {
      setCounter(count + 1);
    };
    return (
      <div className="className">
        <WrappedComponent
          {...props}
          count={count}
          incrementCount={incrementCount}
        />
      </div>
    );
  };

  return UpdatedComponent;
};

export default Wrapper;
