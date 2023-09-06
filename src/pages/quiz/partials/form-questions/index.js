import React from 'react';
import Button from '../../../../components/button';
import './style.scss';

const FormQuestions = ({ questionNumber, answers, question, handleAnswer }) => {
  return (
    <div className="form-questions">
      <span className="form-questions-span-number">Question {questionNumber}</span>
      <br></br>
      <p className="form-questions-text">{question}</p>
      {answers.map((item, index) => (
        <Button text={item} count={index + 1} key={index + 3} onClick={() => handleAnswer(item)} />
      ))}
    </div>
  );
};

export default FormQuestions;
