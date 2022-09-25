import React from 'react';
import styles from './ErrorMessage.module.css';

const ErrorMessage = ({ message }) => (
  <p className={styles.message}>{message}</p>
);

export default ErrorMessage;
