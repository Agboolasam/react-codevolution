import logo from "./logo.svg";
import "./App.css";
import Hello from "./components/Greet"; //component name to be rendered must start with uppercase

function App() {
  return (
    <div className="App">
      <Hello />
    </div>
  );
}

export default App;
