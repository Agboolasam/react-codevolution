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
      <Helloworld />
      <Withoutjsx />
    </div>
  );
}

export default App;
