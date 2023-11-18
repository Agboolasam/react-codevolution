import React from "react";

function Helloworld() {
  return (
    <div>
      <h4> hello, this is another functional component </h4>{" "}
    </div>
  );
} // this is for jsx

function Withoutjsx() {
  return React.createElement(
    "div",
    { id: "Id", className: "boss" },
    React.createElement("h1", null, "hello world from none jsx")
  );
}

export { Helloworld, Withoutjsx };
