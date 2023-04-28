import Wrapper from "./Wrapper";

const HoverContainer = ({ count, incrementCount, name }) => {
  console.log(name);
  return (
    <div>
      <h2 onMouseOver={incrementCount}>hover {count}</h2>
    </div>
  );
};

export default Wrapper(HoverContainer);
