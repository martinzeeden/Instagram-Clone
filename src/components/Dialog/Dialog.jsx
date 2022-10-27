import React, { useRef } from 'react';
import styles from './Dialog.module.css';

const Dialog = ({ children, onClose, maxWidth = false }) => {
  const dialogRef = useRef(null)

  const handleClick = (e) => {
    console.log(e);
    if(dialogRef.current && !dialogRef.current.contains(e.target)){
      onClose()
    }
  }

  return (
    <div className={styles.overlay} onClick={handleClick}>
      <div className={`${styles.dialog} ${maxWidth ? styles.maxWidth : styles.normalWidth}`} ref={dialogRef}>
        {children}
      </div>
    </div>
  );
}

export default Dialog;