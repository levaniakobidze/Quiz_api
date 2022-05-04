import React from "react";
import "./StartQuiz.css";
import Globe from "../images/Globe.svg";

function StartQuiz({ setForm, start }) {
  const startHandler = () => {
    setForm(true);
    start(false);
  };
  return (
    <div className='start'>
      <img className='globe-img' src={require("../images/globe.png")} alt='' />
      <h1 className='start-title'>Are you ready to start quiz?</h1>

      <button className='start-btn' onClick={startHandler}>
        start
      </button>
    </div>
  );
}

export default StartQuiz;
