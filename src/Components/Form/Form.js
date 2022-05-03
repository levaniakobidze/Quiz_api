import React, { useState, useContext } from "react";
import { AppContext } from "../../Context";

function Form() {
  const {
    handleSubmit,
    quiz,
    setQuiz,
    handleAmountChange,
    handleDifficultyChange,
  } = useContext(AppContext);
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='number of questions'>Choose number of questions</label>
      <input
        type='number'
        min='5'
        max='50'
        value={quiz.amount}
        onChange={handleAmountChange}
      />
      <label htmlFor='difficulty'> Choose difficulty </label>
      <select
        name='difficulty'
        id='difficulty'
        value={quiz.difficulty}
        onChange={handleDifficultyChange}>
        <option value='easy'>Easy</option>
        <option value='medium'>Medium</option>
        <option value='hard'>Hard</option>
      </select>
      <button>Start</button>
    </form>
  );
}

export default Form;
