import React, { useState, useContext } from "react";
import { AppContext } from "../Context";
import "./Question.css";

function Question() {
  const {
    index,
    setIndex,
    questions,
    nextQuestion,
    correct,
    setCorrect,
    incorrect,
    setIncorrect,
    quiz,
    randomNum,
    color,
    setColor,
    hover,
    setHover,
  } = useContext(AppContext);

  const { incorrect_answers, correct_answer } = questions[index];
  const [selected, setSelected] = useState([]);

  let answers = [...incorrect_answers];
  answers.splice(randomNum, 0, correct_answer);

  const checkAnswer = (answer, index) => {
    setHover("");
    setSelected((s) => [...s, answer]);
    if (answer === correct_answer) {
      setColor("correct");
      setCorrect(() => correct + 1);
    } else {
      setIncorrect(() => incorrect + 1);
      setColor("incorrect");
    }

    setTimeout(() => nextQuestion(), 1000);
  };
  console.log(correct_answer);
  console.log(selected);

  if (index == questions.length - 1) {
    return (
      <div className='finish'>
        <h1>
          You got <span>{correct}</span> correct answer
        </h1>
      </div>
    );
  }

  if (correct == quiz.amount) {
    return (
      <div className='winner'>
        <h1>asdasdd</h1>
      </div>
    );
  }

  if (incorrect == 3) {
    setColor(false);
    return (
      <div className='game-over'>
        <h1>game over</h1>
        <p>corect answers:{correct}</p>
      </div>
    );
  }

  const fetched = questions && questions.length;
  console.log(questions);
  return (
    <>
      {fetched && (
        <div className='question-cont'>
          <div className='cusestion-title-cont'>
            <h2 className='question-title'>{questions[index].question}</h2>
          </div>

          {answers.map((answer) => {
            return (
              <p
                className={`question ${hover} ${
                  selected.includes(answer) && color
                }`}
                key={answer}
                onClick={() => checkAnswer(answer)}>
                {answer}
              </p>
            );
          })}
          <div className='next-button-cont'>
            <div className='incorrect-dash'>{incorrect}/3</div>
            <div className='correct-dash'>
              {correct}/{quiz.amount}
            </div>

            <button className='next-button' onClick={nextQuestion}>
              next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Question;
