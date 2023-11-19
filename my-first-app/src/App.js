import logo from "./logo.svg";
import "./App.css";
import Hello from "./components/Greet.js";
//component name to be rendered must start with uppercase
import Welcome from "./components/Welcome.js";
import { Helloworld, Withoutjsx } from "./components/New.js";

function App() {
  return (
    <div className="App">
      <Hello />
      <Welcome />
      <Welcome name="agboola" />
      <Helloworld name="Samson" heroName="Swiftyhands">
        <p> this is a child prop in hello world </p> <button> Active </button>{" "}
      </Helloworld>{" "}
      <Withoutjsx />
    </div>
  );
}

export default App;
