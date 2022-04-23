import React, { useState, useEffect } from "react";
import "./Main.css";
import Question from "./Question";
import StartQuiz from "./StartQuiz/StartQuiz";

const url =
  "https://opentdb.com/api.php?amount=50&category=22&difficulty=medium";

function Main() {
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(2);
  const [loading, setLoading] = useState(false);
  const [start, setStart] = useState(false);

  const fetchQuestions = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setQuestions(data.results);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

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
        {!start && <StartQuiz start={start} setStart={setStart} />}
        {start && (
          <Question
            questions={questions}
            index={index}
            setIndex={setIndex}
            loading={loading}
          />
        )}
      </div>
    </div>
  );
}

export default Main;
