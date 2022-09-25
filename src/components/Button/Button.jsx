import React from 'react';
import styles from './Button.module.css';

const Button = ({ onClick, label, className, disabled = false }) => {
  return (
    <button
      className={`${styles.button} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
