import React, { useState } from 'react';
import './App.css';
import Quiz from './components/Quiz';
import Result from './components/Result';
import QuizDetail from './components/QuizDetail';

function App() {
  const [showQuiz, setShowQuiz] = useState(true);
  const [score, setScore] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);

  const handleFinish = (quizScore, totalQuestions) => {
    setScore(quizScore);
    setTotalQuestions(totalQuestions);
    setShowQuiz(false);
  };

  return (
    <>
  
      {showQuiz ? (
        <Quiz onFinish={handleFinish} />
      ) : (
        <Result score={score} totalQuestions={totalQuestions} />
      )}
     
    </>
  );
}

export default App;