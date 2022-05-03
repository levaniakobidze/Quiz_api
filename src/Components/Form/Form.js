import React, { useState, useContext } from "react";
import { AppContext } from "../../Context";
import { ContextProvider } from "../../Context";

function Form() {
  return (
    <form>
      <label htmlFor='number of questions'>Choose number of questions</label>
      <input type='text' />
      <label htmlFor='difficulty'> Choose difficulty </label>
      <input type='text' />
      <button>Start</button>
    </form>
  );
}

export default Form;
