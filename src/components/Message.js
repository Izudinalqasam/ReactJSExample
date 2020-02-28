import React, { Component } from "react";

class Message extends Component {
  // state usually has done in constructor
  constructor() {
    super(); // this is mandatory
    this.state = {
      message: "Welcome Visitor"
    };
  }

  changeMessage(){
      this.setState({
          message: "Thanks for subscribing"
      })
  }

  render() {
      // use () to tell react that you write multiple line of code
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>Subscribe</button>
      </div>
    );
  }
}

export default Message;
