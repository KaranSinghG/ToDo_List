import React from "react";

function Todo({ text, todoList, todo, setTodoList }) {
  function deleteHandler() {
    setTodoList(todoList.filter((item) => item.id !== todo.id));
  }
  return (
    <li>
      {text} <button> Done </button>
      <button onClick={deleteHandler}> Remove </button>
    </li>
  );
}

export default Todo;
