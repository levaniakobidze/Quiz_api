import React, { useState, useContext } from "react";
import { AppContext } from "../../Context";
import "./Form.css";

function Form() {
  const {
    handleSubmit,
    quiz,
    setQuiz,
    handleAmountChange,
    handleDifficultyChange,
  } = useContext(AppContext);
  return (
    <form onSubmit={handleSubmit} className='form1'>
      <label htmlFor='number of questions'>Choose number of questions :</label>
      <input
        type='number'
        min='5'
        max='50'
        value={quiz.amount}
        onChange={handleAmountChange}
      />
      <label htmlFor='difficulty'> Choose difficulty : </label>
      <select
        name='difficulty'
        id='difficulty'
        value={quiz.difficulty}
        onChange={handleDifficultyChange}>
        <option value='easy'>Easy</option>
        <option value='medium'>Medium</option>
        <option value='hard'>Hard</option>
      </select>
      <div className='form-btn-cont'>
        <button className='form-start-btn'>Start</button>
      </div>
    </form>
  );
}

export default Form;
