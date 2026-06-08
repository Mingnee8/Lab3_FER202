import React, { Component } from 'react';
import Question from './Question';
import Score from './Score';

class QuizApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [
        {
          id: 1,
          question: "What is the capital of France?",
          options: ["Paris", "London", "Berlin", "Madrid"],
          answer: "Paris"
        },
        {
          id: 2,
          question: "What is the largest planet in our solar system?",
          options: ["Jupiter", "Saturn", "Mars", "Earth"],
          answer: "Jupiter"
        }
      ],
      currentQuestion: 0,
      score: 0,
      quizEnd: false
    };
  }

  handleAnswerOptionClick = (selectedOption) => {
    const { questions, currentQuestion, score } = this.state;
    const isCorrect = selectedOption === questions[currentQuestion].answer;
    
    if (isCorrect) {
      this.setState({ score: score + 1 });
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      this.setState({ currentQuestion: nextQuestion });
    } else {
      this.setState({ quizEnd: true });
    }
  }

  render() {
    const { questions, currentQuestion, score, quizEnd } = this.state;

    return (
      <div className="quiz-app" style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
        {quizEnd ? (
          <Score score={score} />
        ) : (
          <Question 
            question={questions[currentQuestion].question}
            options={questions[currentQuestion].options}
            questionNumber={currentQuestion + 1}
            handleAnswerOptionClick={this.handleAnswerOptionClick}
          />
        )}
      </div>
    );
  }
}

export default QuizApp;
