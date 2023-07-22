import React from "react";
import AddToDo from "./AddToDo.js";
import Color from "../HOC/color";

class MainComponent extends React.Component {
  render() {
    return (
      <>
        <p>Simple TODO Apps with React.js</p>
        <AddToDo />
      </>
    );
  }
}
export default Color(MainComponent);
