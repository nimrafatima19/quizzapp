import React , { useState } from 'react'
import '../css/Quiz.css';


export default function QuizDetail() {
    
    let point = document.getElementById('points')
    let quizSec = document.getElementById("quizSec")
    let startQuiz = () =>{
        point.style.display = 'none'
        quizSec.style.display = 'flex'
    }
  return (
<>
 <section className='hero' id='points'>

<div className="box">

<div className="header">Quiz Application</div>
<div className="instruction">
<ul>
    <li>1. You will be asked 10 questions after another.</li>
    <li>2. You points are awarded for the correct answer.</li>
    <li>3. Each question has four option. You can choose only one option.</li>
    <li>4. You can review and change answers before the quiz finish.</li>
    <li>5. The result will be declared at the end of the quiz.</li>
</ul>
</div>

<div className="inp-user">
    <input type="text" name="" id="" placeholder='Enter username'/>
</div>
<div className="startBtn">
    <button onClick={startQuiz}>Start Quiz</button>
</div>

</div>

 </section>
 {/* <section className='QuizSec' id='quizSec'>
    <div className="box">
        
<div className="header">Quiz Application</div>
<div className="que">
    1. Following data methods can be used to display data in some from using javascript
</div>
<div className="opt">
    <input className='rad' type="radio" name="answer" id="option1" />
    <label htmlFor="option1" id='val1'>document.write()</label>
</div>
<div className="opt">
    <input className='rad' type="radio" name="answer" id="option2" />
    <label htmlFor="option2" id='val2'>console.log()</label>
</div>
<div className="opt">
    <input className='rad' type="radio" name="answer" id="option3" />
    <label htmlFor="option3" id='val3'>window.alert()</label>
</div>
<div className="btns">
    <button className='btn1'>Prev</button>
    <button className='btn2'>Next</button>
</div>


    </div>
</section>
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
    <div className="val">50</div>
</div><div className="tit">
    <div className="name">Total Questions</div>
    <div className="val">10</div>
</div><div className="tit">
    <div className="name">Correct Answer</div>
    <div className="val">8</div>
</div><div className="tit">
    <div className="name">Total Earn Points</div>
    <div className="val">40</div>
</div><div className="tit">
    <div className="name">Quiz Result</div>
    <div className="val green">Passed</div>
</div>



    </div>

</div>


</section> */}


</>
  )
}