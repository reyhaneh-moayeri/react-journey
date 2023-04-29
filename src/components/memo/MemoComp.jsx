import React from "react";

const Memo = (props) => {
  console.log("memo");
  return <div>meno comp {props.name}</div>;
};

export default React.memo(Memo);
