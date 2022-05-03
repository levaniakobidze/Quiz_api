import React, { useState, useContext, createContext, useEffect } from "react";

export const AppContext = createContext();
const API_URL = "https://opentdb.com/api.php?";
export const ContextProvider = (props) => {
  const [loading, setLoading] = useState(false);
  const [startQuiz, setStartQuiz] = useState(true);
  const [renderForm, setRenderForm] = useState(false);
  const [renderQuestions, setRenderQuestions] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(2);
  const [quiz, setQuiz] = useState({ difficulty: "easy", amount: 10 });

  const fetchQuestions = async (url) => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setRenderForm(false);
    setRenderQuestions(true);
    const api = `${API_URL}amount=${quiz.amount}&category=22&difficulty=${quiz.difficulty}&type=multiple`;
    fetchQuestions(api);
  };

  const handleAmountChange = (e) => {
    setQuiz({ difficulty: `${quiz.difficulty}`, amount: `${e.target.value}` });
  };
  const handleDifficultyChange = (e) => {
    setQuiz({ difficulty: `${e.target.value}`, amount: `${quiz.amount}` });
  };

  return (
    <AppContext.Provider
      value={{
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
        handleSubmit,
        quiz,
        setQuiz,
        handleAmountChange,
        handleDifficultyChange,
      }}>
      {props.children}
    </AppContext.Provider>
  );
};
