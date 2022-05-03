import "./styles.css";
import Form from "./Components/Form";
import List from "./Components/List";
import { useState } from "react";

export default function App() {
  const [inputText, setInputText] = useState("");
  const [todoList, setTodoList] = useState([]);
  return (
    <div className="App">
      <h1>To do List</h1>
      <h4>-------- A Simple React Project --------</h4>
      <Form
        inputText={inputText}
        todoList={todoList}
        setTodoList={setTodoList}
        setInputText={setInputText}
      />
      <List todoList={todoList} />
    </div>
  );
}
