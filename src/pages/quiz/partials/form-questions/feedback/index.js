import React from 'react';
import { FiThumbsUp, FiThumbsDown } from 'react-icons/fi';
import './style.scss';

const Feedback = ({ selectedAnswer, correctAnswer, type }) => {
  const isCorrect = selectedAnswer === correctAnswer;

  return (
    <div className="feedback">
      {isCorrect && (
        <div>
          <div className="feedback-correct-answer-icon">
            <FiThumbsUp color="86608E" />
          </div>
          <p className="feedback-text">Yeah! That's the right answer!</p>
        </div>
      )}

      {!isCorrect && type === 'multiple' && (
        <div>
          <div className="feedback-incorrect-answer-icon">
            <FiThumbsDown color="86608E" />
          </div>
          <p className="feedback-text">
            Sorry! The right answer was <span className="feedback-span">{correctAnswer}</span>
          </p>
        </div>
      )}
      {!isCorrect && type === 'boolean' && (
        <div>
          <div className="feedback-incorrect-answer-icon">
            <FiThumbsDown color="86608E" />
          </div>
          <p className="feedback-text">Sorry, it's incorrect.</p>
        </div>
      )}
    </div>
  );
};
export default Feedback;
