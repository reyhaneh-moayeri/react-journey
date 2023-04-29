import Memo from "./MemoComp";
import RegComp from "./RegComp";
import React from "react";

class ParentComp extends React.Component {
  state = {
    name: "reyhaneh",
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({ name: "reyhaneh" });
    }, 1000);
  }

  render() {
    console.log("parent ----");
    return (
      <div>
        <RegComp name={this.state.name} />
        <Memo name={this.state.name} />
      </div>
    );
  }
}

export default ParentComp;
