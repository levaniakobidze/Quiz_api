import React, { useState, useContext, createContext, useEffect } from "react";

export const AppContext = createContext();

export const ContextProvider = (props) => {
  const [loading, setLoading] = useState(false);
  const [startQuiz, setStartQuiz] = useState(true);
  const [renderForm, setRenderForm] = useState(false);
  const [renderQuestions, setRenderQuestions] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(2);

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
  };

  return (
    <AppContext.Provider
      value={[
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
      ]}>
      {props.children}
    </AppContext.Provider>
  );
};
