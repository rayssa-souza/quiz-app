import React from 'react';
import './style.scss';

const Loading = ({ children }) => {
  return <div className="loading-animation">{children}</div>;
};

export default Loading;
