import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  increment() {
    // setState is asyncronous process so, using callback to further action after state has succesfully been changed
    // setState will accumulate all setStateCommand and carry out the result to the last setState
    this.setState(
      {
        count: this.state.count + 1
      },
      () => console.log("The callback value is ", this.state.count)
    );
  }

  incrementUsingPrevState() {
      this.setState((prevState, props) => ({
          count: prevState.count + 1
      }), () => console.log("The callback value is ", this.state.count))
  }

  incrementFiveTimes() {
      for (let index = 0; index < 5; index++) {
          this.incrementUsingPrevState()
      }
  }

  render() {
    return (
      <div>
        <h1>Counter - {this.state.count}</h1>
        <button onClick={() => this.incrementFiveTimes()}>Increment</button>
      </div>
    );
  }
}

export default Counter;
