import React, { useState, useEffect } from "react";
import "./Main.css";
import Question from "./Question";

const url =
  "https://opentdb.com/api.php?amount=50&category=22&difficulty=medium";

function Main() {
  const [questions, setQuestions] = useState([
    { category: "", incorrect_answers: ["", "", ""] },
  ]);
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchQuestions = async () => {
    setLoading(false);
    const response = await fetch(url);
    const data = await response.json();
    setQuestions(data.results);
  };
  useEffect(() => {
    fetchQuestions();
  }, []);

  return (
    <div className='main'>
      <div className='main-white-wrapper'>
        <Question
          questions={questions}
          index={index}
          setIndex={setIndex}
          loading={loading}
        />
      </div>
    </div>
  );
}

export default Main;
