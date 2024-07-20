import React, { useState } from 'react';
import './App.css';
import Quiz from './components/Quiz';
import Result from './components/Result';
import QuizDetail from './components/QuizDetail';

function App() {
  const [step, setStep] = useState('detail'); // 'detail', 'quiz', 'result'
  const [username, setUsername] = useState('');
  const [score, setScore] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);

  const handleStartQuiz = (name) => {
    setUsername(name);
    setStep('quiz');
  };

  const handleFinishQuiz = (quizScore, totalQuestions) => {
    setScore(quizScore);
    setTotalQuestions(totalQuestions);
    setStep('result');
  };

  return (
    <>
      {step === 'detail' && <QuizDetail onStartQuiz={handleStartQuiz} />}
      {step === 'quiz' && <Quiz onFinish={handleFinishQuiz} />}
      {step === 'result' && <Result username={username} score={score} totalQuestions={totalQuestions} />}
    </>
  );
}

export default App;