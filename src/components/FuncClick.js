import React from "react";

function FuncClick() {
//   function handlerClick() {
//     console.log("Button clicked");
//   }

  return (
    <div>
      <button onClick={handlerClick}>Click</button>
    </div>
  );
}

function handlerClick() {
    console.log("Button clicked");
  }

export default FuncClick;
