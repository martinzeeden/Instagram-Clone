import React from 'react';
import styles from './Input.module.css';

const Input = ({ value, type = 'text', onChange }) => {
  return (
    <input
      className={styles.input}
      value={value}
      type={type}
      onChange={onChange}
    />
  );
};

export default Input;
