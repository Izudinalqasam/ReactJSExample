import React, { Component } from "react";

class ClassClick extends Component {
  // Event handler different with function call,
  // you can simply handle the event like onClick by declare function in the argument. i.e onClick={this.clickHandler}
  // or you can handle the event by declare cunction call in the argument. i.e onClick={() => this.clickHandler()}
  clickHandler() {
    console.log("Ciicked the button");
  }

  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click Me</button>
      </div>
    );
  }
}

export default ClassClick;
