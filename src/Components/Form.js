import React from "react";

function Form() {
  function inputTextHandler(e) {
    console.log(e.target.value);
  }
  function addButtonHandler(e) {
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
