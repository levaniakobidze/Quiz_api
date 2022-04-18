import React, { useState, useEffect } from "react";
import "./Main.css";

const url = "https://www.metaweather.com/api/";

function Main() {
  const [question, setQuestion] = useState([]);

  const fetchQuestions = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setQuestion(data);
  };
  useEffect(() => {
    fetchQuestions();
  }, []);
  console.log(question);

  return (
    <div className='main'>
      <div className='main-white-wrapper'></div>
    </div>
  );
}

export default Main;
