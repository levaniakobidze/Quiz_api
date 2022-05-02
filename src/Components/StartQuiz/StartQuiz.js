import React from "react";
import "./StartQuiz.css";

function StartQuiz({ setForm, start }) {
  const startHandler = () => {
    setForm(true);
    start(false);
  };
  return (
    <div className='start'>
      <button onClick={startHandler}>start</button>
    </div>
  );
}

export default StartQuiz;
