import React, { useState } from "react";
import "./Question.css";

function Question({ questions, index, setIndex, loading }) {
  const [allAnswers, setAllAnswers] = useState([]);

  const fetched = questions && questions.length;

  const createAnswers = () => {
    const incorrect =
      fetched && questions[index].incorrect_answers.map((answer) => answer);
    const correct = fetched && questions[index].correct_answer;

    return incorrect;
  };

  return (
    <>
      {fetched && (
        <div>
          <h1>{questions[index].question}</h1>

          <ul>
            {allAnswers.map((answer, index) => {
              return <li key={index}>{answer}</li>;
            })}
          </ul>
        </div>
      )}
    </>
  );
}

export default Question;
