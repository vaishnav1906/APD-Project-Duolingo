// src/Quiz.js
import React, { useState } from 'react';

const Quiz = () => {
  // Example questions for a Spanish quiz
  const questions = [
    {
      question: 'What is the Spanish translation of "Hello"?',
      options: ['Hola', 'Bonjour', 'Hallo', 'Ciao'],
      correctAnswer: 'Hola',
    },
    {
      question: 'What is the Spanish translation of "Goodbye"?',
      options: ['Adiós', 'Au revoir', 'Tschüss', 'Arrivederci'],
      correctAnswer: 'Adiós',
    },
  ];

  // State to keep track of the current question
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [score, setScore] = useState(0);

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setSelectedAnswer('');
  };

  if (currentQuestionIndex === questions.length) {
    return (
      <div>
        <h2>Quiz Complete!</h2>
        <p>Your score: {score} / {questions.length}</p>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div>
      <h3>{currentQuestion.question}</h3>
      {currentQuestion.options.map((option, index) => (
        <div key={index}>
          <input
            type="radio"
            name="answer"
            value={option}
            checked={selectedAnswer === option}
            onChange={() => handleAnswerSelect(option)}
          />
          <label>{option}</label>
        </div>
      ))}
      <br />
      <button onClick={handleNextQuestion}>Next Question</button>
    </div>
  );
};

export default Quiz;

