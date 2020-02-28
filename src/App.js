import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import HelloJSX from "./components/HelloJSX";
import { GreetProps, GreetPropsDestruct } from "./components/GreetProps";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FuncClick from "./components/FuncClick";
import ClassClick from "./components/ClassClick";

function App() {
  return (
    <div className="App">
      {/* <Greet /> */}
      {/* <Welcome name="Bruce Welcome"/>
      <Welcome name="Clark Welcome">
        <p>This is childre props for class component</p>
      </Welcome>
      <Welcome name="Diana Welcome"/> */}
      {/* <HelloJSX/> */}
      {/* <GreetProps name="Bruce" heroName="Batman">
        <p>This is children props</p>
      </GreetProps>
      <GreetProps name="Clark" heroName="Superman" >
        <button>Action</button>
      </GreetProps>
      <GreetProps name="Diana" heroName="Wonder women" />
      <Message/> */}
      {/* <Counter /> */}
      {/* <GreetPropsDestruct name="Dahlia" heroName="Superman" /> */}
      <FuncClick/>
      <ClassClick/>
    </div>
  );
}

export default App;
