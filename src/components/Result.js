import React from 'react';
import '../css/Quiz.css'; // Update or create Result.css for styling

export default function Result({ score = 0, totalQuestions = 0 }) {
  // Define how many points each question is worth
  const pointsPerQuestion = 10;

  // Calculate total possible points and earned points
  const totalPoints = totalQuestions * pointsPerQuestion;
  const earnedPoints = score * pointsPerQuestion;
  
  // Ensure percentage calculation is safe
  const percentage = totalQuestions > 0 ? (score / totalQuestions) * 100 : 0;
  const result = percentage >= 50 ? 'Passed' : 'Failed';

  return (
    <section className='main' id='result'>
      <div className="boxes">
        <div className="header">Quiz Application</div>
        <div className="info">
          <div className="tit">
            <div className="name">Username</div>
            <div className="val">Musadique Muslim</div>
          </div>
          <div className="tit">
            <div className="name">Total Quiz Points</div>
            <div className="val">{totalPoints}</div>
          </div>
          <div className="tit">
            <div className="name">Total Questions</div>
            <div className="val">{totalQuestions}</div>
          </div>
          <div className="tit">
            <div className="name">Correct Answers</div>
            <div className="val">{score}</div>
          </div>
          <div className="tit">
            <div className="name">Total Earned Points</div>
            <div className="val">{earnedPoints}</div>
          </div>
          <div className="tit">
            <div className="name">Quiz Result</div>
            <div className={`val ${result === 'Passed' ? 'green' : 'red'}`}>{result}</div>
          </div>
        </div>
      </div>
    </section>
  );
}