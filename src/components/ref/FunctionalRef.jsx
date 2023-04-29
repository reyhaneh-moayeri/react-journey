import { useRef, useEffect, useContext } from "react";
import { UserContext } from "../../App";
const FunctionalRef = () => {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const user = useContext(UserContext);
  console.log(user);

  return <input type="text" ref={inputRef} />;
};

export default FunctionalRef;
