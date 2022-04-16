import React from "react";

function Form() {
  function inputTextHandler(e) {
    console.log(e.target.value);
  }
  return (
    <form>
      <input onChange={inputTextHandler} className="Form" type="text" />
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
