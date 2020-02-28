import React from "react"

// this is a JSX Component example
const HelloJSX = () => {
    return (
        <div className='dummyClass'>
            <h1>Hello Crees</h1>
        </div>
    )
}

// this is way to create element without using JSX
const HelloWithoutJSX = () => {
    return React.createElement(
        "div",
        {id: "hello", className: "dummyClass"},
        React.createElement(
            "h1",
            null,
            "Hello Crees"
        )
    )
}

export default HelloJSX