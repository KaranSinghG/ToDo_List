import React from "react";

function Todo({ text }) {
  return (
    <li>
      {text} <button> Done </button>
      <button> Remove </button>
    </li>
  );
}

export default Todo;
