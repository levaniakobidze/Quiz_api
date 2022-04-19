import React from "react";
import "./Question.css";

function Question({ questions, index, setIndex, loading }) {
  console.log(questions);
  return (
    <div>
      <h1>{questions[index].question}</h1>
      <li>{questions[index].correct_answer}</li>
      <li>{questions[index].incorrect_answers[0]}</li>
      <li>{questions[index].incorrect_answers[1]}</li>
      <li>{questions[index].incorrect_answers[2]}</li>
    </div>
  );
}

export default Question;
