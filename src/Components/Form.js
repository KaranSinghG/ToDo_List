import React from "react";

function Form({ inputText, todoList, setTodoList, setInputText }) {
  function inputTextHandler(e) {
    console.log(e.target.value);
    setInputText(e.target.value);
  }
  function addButtonHandler(e) {
    e.preventDefault();
    setTodoList([
      ...todoList,
      { text: inputText, completed: false, id: Math.random() }
    ]);
    console.log("Clicked");
  }

  return (
    <form>
      <input onChange={inputTextHandler} className="Form" type="text" />
      <button onClick={addButtonHandler} type="button">
        +
      </button>
      <select>
        <option> All </option>
        <option> Completed </option>
        <option> Incompleted </option>
      </select>
    </form>
  );
}

export default Form;
