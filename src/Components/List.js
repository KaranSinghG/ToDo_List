import React from "react";
import Todo from "./Todo";

import "../CSS/list.css";

function List({ todoList, setTodoList }) {
  return (
    <ul className="ul">
      {todoList.map((todo) => (
        <Todo
          todoList={todoList}
          setTodoList={setTodoList}
          text={todo.text}
          key={todo.id}
          todo={todo}
        />
      ))}
    </ul>
  );
}

export default List;
