import React, { useState, useContext } from "react";
import { AppContext } from "../Context";
import "./Question.css";

function Question() {
  const {
    index,
    setIndex,
    questions,
    setQuestions,
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
    setRenderQuestions,
    setStartQuiz,
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
    if (index == questions.length) {
      console.log("sadas");
    }
    if (index == questions.length) {
      setQuestions(false);
    }

    index !== quiz.amount - 1 && setTimeout(() => nextQuestion(), 1000);
  };

  console.log(index);
  console.log(questions.length);

  console.log(correct_answer);

  if (index == questions.length) {
    return (
      <div className='finish'>
        <h1>
          You got <span>{correct}</span> correct answer
        </h1>
      </div>
    );
  }

  if (correct == questions.length - incorrect) {
    return (
      <div className='winner'>
        <img
          className='winner-img
          '
          src={require("../Components/images/cup.png")}
          alt='image'
        />
        <h1>Congratulations</h1>
        <p>
          you got <span>{correct}</span> from <span>{quiz.amount}</span>
        </p>
        <div className='restart-btn-cont'>
          <form>
            <button type='submit' className='restart'>
              {" "}
              Restart{" "}
            </button>
          </form>
        </div>
      </div>
    );
  }

  if (incorrect == 3) {
    setColor(false);
    return (
      <div className='game-over'>
        <img
          className='game-over-img'
          src={require("../Components/images/bored.png")}
          alt=''
        />
        <h1>You lost</h1>
        <p>
          incorrect answers : <span className='incorrect-num'>{incorrect}</span>{" "}
        </p>
        <p>
          corect answers : <span className='correct-num'>{correct}</span>
        </p>
        <form className='game-over-btn-cont'>
          <button type='submit' className='restart'>
            {" "}
            Restart{" "}
          </button>
        </form>
      </div>
    );
  }

  const fetched = questions && questions.length;

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
            <div className='incorrect-dash'>
              {incorrect}
              <tag>/</tag>3
            </div>
            <div className='correct-dash'>
              {correct}
              <tag>/</tag>
              {quiz.amount}
            </div>
            <button className='next-button'>
              {index}
              <tag>/</tag>
              {quiz.amount}
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Question;
