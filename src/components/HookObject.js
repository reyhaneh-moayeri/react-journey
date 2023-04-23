import { useState } from "react";

const HookObject = () => {
  const [user, setUser] = useState({ firstName: "", lastName: "" });

  const changeFirstnameHandler = (event) => {
    console.log(event.target.value);
    setUser({ ...user, firstName: event.target.value });
  };

  const changeLastnameeHandler = (event) => {
    setUser({ ...user, lastName: event.target.value });
  };
  return (
    <div>
      <form>
        <input
          type="text"
          value={user.firstName}
          onChange={changeFirstnameHandler}
        />
        <input
          type="text"
          value={user.lastName}
          onChange={changeLastnameeHandler}
        />
        <h1>my firstname is {user.firstName}</h1>
        <h1>my lastname is {user.lastName}</h1>
      </form>
    </div>
  );
};

export default HookObject;
