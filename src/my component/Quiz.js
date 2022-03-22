import React, { useState } from "react";

export default function App() {
  const questions = [
    {
      questionText:
        "Which one is the largest city by areawise in Madhya Pradesh?",
      answerOptions: [
        { answerText: "Gwalior", isCorrect: false },
        { answerText: "Indore", isCorrect: true },
        { answerText: "Jabalpur", isCorrect: false },
        { answerText: "Bhopal", isCorrect: false },
      ],
    },
    {
      questionText: "Which is the longest river on the earth?",
      answerOptions: [
        { answerText: "Ganga", isCorrect: false },
        { answerText: "Congo", isCorrect: false },
        { answerText: "Indus", isCorrect: false },
        { answerText: "Nile", isCorrect: true },
      ],
    },
    {
      questionText: "The iPhone was created by which company?",
      answerOptions: [
        { answerText: "Apple", isCorrect: true },
        { answerText: "Intel", isCorrect: false },
        { answerText: "Amazon", isCorrect: false },
        { answerText: "Microsoft", isCorrect: false },
      ],
    },
    {
      questionText: "Which gas caused the Bhopal gas tragedy incident?",
      answerOptions: [
        { answerText: "Isoamyl acetate", isCorrect: false },
        { answerText: "Nitrous oxide ", isCorrect: false },
        { answerText: "Methyl isocyanate", isCorrect: true },
        { answerText: "Carbon Monoxide", isCorrect: false },
      ],
    },

    {
      questionText: "Which of these is a file format for digital images?",
      answerOptions: [
        { answerText: "IBM", isCorrect: false },
        { answerText: "PNG ", isCorrect: false },
        { answerText: "CIA", isCorrect: false },
        { answerText: "JPG", isCorrect: true },
      ],
    },

    {
      questionText: "How many bones are in the human body?",
      answerOptions: [
        { answerText: "206", isCorrect: true },
        { answerText: "204 ", isCorrect: false },
        { answerText: "185", isCorrect: false },
        { answerText: "220", isCorrect: false },
      ],
    },

    {
      questionText: "Which planet has supersonic winds?",
      answerOptions: [
        { answerText: "Neptune", isCorrect: true },
        { answerText: "Jupiter ", isCorrect: false },
        { answerText: "Mars", isCorrect: false },
        { answerText: "Saturn", isCorrect: false },
      ],
    },

    {
      questionText: "Which is the largest coffee-producing state of India?",
      answerOptions: [
        { answerText: " Kerala", isCorrect: false },
        { answerText: "Karnataka ", isCorrect: true },
        { answerText: "Tamil Nadu", isCorrect: false },
        { answerText: "Arunachal Pradesh", isCorrect: false },
      ],
    },

    {
      questionText:
        "Which of the following states is not located in the North?",
      answerOptions: [
        { answerText: "Jharkhand", isCorrect: true },
        { answerText: "Haryana ", isCorrect: false },
        { answerText: "Jammu and Kashmir", isCorrect: false },
        { answerText: "Himachal Pradesh", isCorrect: false },
      ],
    },

    {
      questionText: "Who is known as the father of World Wide Web?",
      answerOptions: [
        { answerText: "Steve Chen", isCorrect: false },
        { answerText: "Paul Buchheit", isCorrect: false },
        { answerText: "Tim Berners Lee", isCorrect: true },
        { answerText: "Steve Jobs", isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <div className="header">
      <center>
        <h1>WELCOME </h1>
        <h2> General Knowledge Quiz </h2>
      </center>

      <br />

      <div className="app">
        {showScore ? (
          <div className="score-section">
            <h3>You have completed the quiz!</h3>
            <p>
              Your score is {score} out of {questions.length}
            </p>
            <button className="btn">Play Again</button>
          </div>
        ) : (
          <>
            <div className="question-section">
              <div className="question-count">
                <span>Question {currentQuestion + 1}</span>
              </div>
              <div className="question-text">
                {questions[currentQuestion].questionText}
              </div>
            </div>
            <div className="answer-section">
              {questions[currentQuestion].answerOptions.map((answerOption) => (
                <button
                  onClick={() =>
                    handleAnswerOptionClick(answerOption.isCorrect)
                  }
                >
                  {answerOption.answerText}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
	  <div className="pre-next-btn-div">
	  <button>previous</button>
		<button>next</button>
	  </div>
	        
    </div>
  );
}
