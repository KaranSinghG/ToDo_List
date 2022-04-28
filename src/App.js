import "./styles.css";
import Form from "./Components/Form";
import List from "./Components/List";

export default function App() {
  return (
    <div className="App">
      <h1>To do List</h1>
      <h4>-------- A Simple React Project --------</h4>
      <Form />
      <List />
    </div>
  );
}
