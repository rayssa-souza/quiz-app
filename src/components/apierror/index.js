import React from 'react';
import './style.scss';
import { BsClockHistory } from 'react-icons/bs';

const ApiError = () => {
  return (
    <div className="api-error">
      <div className="api-error-icon">
        <BsClockHistory />
      </div>
      <p className="api-error-message">Whoops! Something seems off... Please try again later. </p>
    </div>
  );
};

export default ApiError;
