//for class components two imports are needed
import { React, Component } from "react";

class Welcome extends Component {
  //must extend the class component from react
  // must render something
  render() {
    return <h2> Welcome {this.props.name}, to class component usage </h2>;
  } //using pros needs the this property in class component
}
export default Welcome;
