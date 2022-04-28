import React from "react";

import "../CSS/list.css";

function List() {
  return (
    <ul className="ul">
      <li>
        Item 1<button type="button">Done</button>
        <button type="button">Remove</button>
      </li>
      <li>
        Item 2<button type="button">Done</button>
        <button type="button">Remove</button>
      </li>
      <li>
        Item 3<button type="button">Done</button>
        <button type="button">Remove</button>
      </li>
    </ul>
  );
}

export default List;
