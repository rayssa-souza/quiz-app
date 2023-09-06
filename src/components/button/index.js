import React from 'react';
import clsx from 'clsx';
import './styles.scss';

const Button = ({ onClick, children, size = 'large', icon, text = 'Enter your text', count }) => {
  return (
    <button className={clsx({ button: true, 'button-large': size === 'large' })} onClick={onClick}>
      {icon && <div className="button-icon">{icon}</div>}
      {count && <div className="button-count-icon">{count}</div>}
      <span className={clsx({ 'button-span': true, 'button-span-max-length': text.length > 28 })}>
        {text}
      </span>
      {children}
    </button>
  );
};

export default Button;
