import React from 'react';
import styles from './Dialog.module.css';

const Dialog = ({ children }) => (
  <div className={styles.overlay}>
    <div className={styles.dialog}>
      {children}
    </div>
  </div>
)

export default Dialog;