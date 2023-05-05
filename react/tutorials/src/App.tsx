import "./App.css";
import Button from "./components/Button";
import Card from "./components/Card";
import List from "./components/List";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button name="Emanuel" age={18} />
        <List list={["Coffee", "Tea", "Beer"]} />
        <Card />
      </header>
    </div>
  );
}

export default App;
