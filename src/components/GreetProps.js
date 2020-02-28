import React from "react";

// you can using curly bracket to write more than one line of code
// You can pass children if you don't know exactly what wiil you put in the component
// by declare another tag inside the tag GreetProps in the App.js
const GreetProps = props => {
  console.log(props);
  // JSX only contain one wrapper, so you have to wrap more than one tag using "div" or another
  return (
    <div>
      <h1>
        Hello {props.name} a.k.a {props.heroName}
      </h1>
      {props.children}
    </div>
  );
};

// you can destructing the props like this
const GreetPropsDestruct = ({ name, heroName }) => {
  return (
    <div>
      <h1>
        Hello {name} a.k.a {heroName}
      </h1>
    </div>
  );
};

export { GreetProps, GreetPropsDestruct };
