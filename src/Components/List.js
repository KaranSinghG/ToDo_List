import React from "react";
import Todo from "./Todo";

import "../CSS/list.css";

function List({ todoList }) {
  return (
    <ul className="ul">
      {todoList.map((todo) => (
        <Todo text={todo.text} key={todo.id} />
      ))}
    </ul>
  );
}

export default List;
