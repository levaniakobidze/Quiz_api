import React, { useState, useEffect, useContext } from "react";
import "./Main.css";
import { AppContext } from "../Context";
import Question from "./Question";
import StartQuiz from "./StartQuiz/StartQuiz";
import Form from "./Form/Form";

function Main() {
  const {
    loading,
    setLoading,
    startQuiz,
    setStartQuiz,
    renderForm,
    setRenderForm,
    renderQuestions,
    setRenderQuestions,
    questions,
    setQuestions,
    index,
    setIndex,
  } = useContext(AppContext);

  if (loading) {
    return (
      <div className='loading'>
        <span className='span1'></span>
        <span className='span2'></span>
        <span className='span3'></span>
      </div>
    );
  }

  return (
    <div className='main'>
      <div className='main-white-wrapper'>
        {startQuiz && (
          <StartQuiz start={setStartQuiz} setForm={setRenderForm} />
        )}
        {renderForm && (
          <Form setForm={setRenderForm} setStart={setRenderQuestions} />
        )}
        {renderQuestions && <Question />}
      </div>
    </div>
  );
}

export default Main;
