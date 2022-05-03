import React, { useState, useContext } from "react";
import { AppContext } from "../Context";
import "./Question.css";

function Question() {
  const {
    index,
    questions,
    nextQuestion,
    correct,
    setCorrect,
    incorrect,
    setIncorrect,
    quiz,
    randomNum,
  } = useContext(AppContext);

  const { incorrect_answers, correct_answer } = questions[index];
  if (incorrect == 3) {
    return (
      <>
        <h1>game over</h1>
        <p>corect answers:{correct}</p>
      </>
    );
  }
  if (correct == quiz.amount) {
    return <h1>asdasdd</h1>;
  }

  let answers = [...incorrect_answers];
  answers.splice(randomNum, 0, correct_answer);

  const checkAnswer = (answer) => {
    if (answer === correct_answer) {
      setCorrect(() => correct + 1);
    } else {
      setIncorrect(() => incorrect + 1);
    }
  };

  const fetched = questions && questions.length;
  return (
    <>
      {fetched && (
        <form onSubmit={(e) => e.preventDefault()}>
          <h1>{questions[index].question}</h1>
          {answers.map((answer, index) => {
            return (
              <p key={index} onClick={() => checkAnswer(answer)}>
                {answer}
              </p>
            );
          })}
          <button onClick={nextQuestion}>next</button>
        </form>
      )}
    </>
  );
}

export default Question;
