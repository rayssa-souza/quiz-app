import React from 'react';
import './styles.scss';

const Button = ({ onClick, children, size = 'large', icon, text = 'Enter your text', count }) => {
  return (
    <button className={`button button-${size}`} onClick={onClick}>
      {icon && <div className="button-icon">{icon}</div>}
      {count && <div className="button-count-icon">{count}</div>}
      <span className={`button-span ${text.length > 28 ? 'button-span-max-length' : ''}`}>
        {text}
      </span>
      {children}
    </button>
  );
};

export default Button;
