import React from "react";

function Helloworld(props) {
  console.log(props);
  return (
    <div>
      <h4>
        {" "}
        hello {props.name}, this is another functional component{" "}
        <p> My heroname is {props.heroName} </p>{" "}
      </h4>{" "}
      {props.children}{" "}
    </div>
  ); // the props.children renders what the children stated in the tag from app.js
} // this is for jsx

function Withoutjsx() {
  return React.createElement(
    "div",
    { id: "Id", className: "boss" },
    React.createElement("h1", null, "hello world from none jsx")
  );
}

export { Helloworld, Withoutjsx };
