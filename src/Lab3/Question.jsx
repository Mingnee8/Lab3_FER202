import React, { Component } from 'react';

class Question extends Component {
  render() {
    const { question, options, questionNumber, handleAnswerOptionClick } = this.props;

    return (
      <div className="question-section" style={{ marginBottom: '20px' }}>
        <div className="question-count">
          <h2 style={{ fontWeight: 'normal' }}>Question {questionNumber}</h2>
        </div>
        <div className="question-text">
          <h3 style={{ fontWeight: 'normal' }}>{question}</h3>
        </div>
        <div className="answer-section" style={{ border: '1px solid #eee', borderRadius: '4px', overflow: 'hidden' }}>
          {options.map((option, index) => (
            <div 
              key={index} 
              className="option"
              style={{ 
                borderBottom: index !== options.length - 1 ? '1px solid #eee' : 'none'
              }}
            >
              <button 
                onClick={() => handleAnswerOptionClick(option)}
                style={{ 
                  display: 'block', 
                  width: '100%', 
                  padding: '10px 15px', 
                  textAlign: 'left', 
                  background: 'none', 
                  border: 'none', 
                  color: '#0066cc', 
                  textDecoration: 'underline',
                  cursor: 'pointer',
                  fontSize: '14px'
                }}
              >
                {option}
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Question;
