import React from "react";

function Form({ setStart, setForm }) {
  const submitHandler = (e) => {
    e.preventDefault();
    setStart(true);
    setForm(false);
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor='number of questions'>Choose number of questions</label>
      <input type='text' />
      <label htmlFor='difficulty'> Choose difficulty </label>
      <input type='text' />
      <button>Start</button>
    </form>
  );
}

export default Form;
