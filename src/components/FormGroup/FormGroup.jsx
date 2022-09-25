import React from 'react';
import styles from './FormGroup.module.css';

const FormGroup = ({ label, children }) => {
  return (
    <div className={styles.formGroup}>
      <label>{label}</label>
      {children}
    </div>
  );
};

export default FormGroup;
