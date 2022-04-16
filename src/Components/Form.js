import React from "react";

function Form() {
  return (
    <form>
      <input className="Form" type="text" />
      <button type="button">Add</button>
      <select>
        <option> All </option>
        <option> Completed </option>
        <option> Incompleted </option>
      </select>
    </form>
  );
}

export default Form;
