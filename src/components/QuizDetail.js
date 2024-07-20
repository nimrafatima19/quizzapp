import React, { useState } from 'react';
import '../css/Quiz.css';

export default function QuizDetail({ onStartQuiz }) {
  const [username, setUsername] = useState('');

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const handleStart = () => {
    if (username.trim()) {
      onStartQuiz(username);
    }
  };

  return (
    <section className='hero' id='points'>
      <div className="box">
        <div className="header">Quiz Application</div>
        <div className="instruction">
          <ul>
            <li>1. You will be asked 10 questions one after another.</li>
            <li>2. Points are awarded for correct answers.</li>
            <li>3. Each question has four options. You can choose only one option.</li>
            <li>4. You can review and change answers before the quiz finishes.</li>
            <li>5. The result will be declared at the end of the quiz.</li>
          </ul>
        </div>
        <div className="inp-user">
          <input type="text" value={username} onChange={handleChange} placeholder='Enter username' />
        </div>
        <div className="startBtn">
          <button onClick={handleStart}>Start Quiz</button>
        </div>
      </div>
    </section>
  );
}