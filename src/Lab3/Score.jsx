import React, { Component } from 'react';

class Score extends Component {
  render() {
    const { score } = this.props;

    return (
      <div className="score-section" style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'normal', color: '#000000ff' }}>Quiz Ended</h1>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 'normal', color: '#000000ff' }}>Your Score: {score}</h2>
      </div>
    );
  }
}

export default Score;
