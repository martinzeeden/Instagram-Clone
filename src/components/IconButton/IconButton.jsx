import React from 'react';
import styles from './IconButton.module.css';

const IconButton = ({ icon, onClick, disabled = false }) => (
  <button className={styles.iconButton} onClick={() => onClick?.()} disabled={disabled}>
    <img className={styles.icon} src={icon} alt="Icon"/>
  </button>
);

export default IconButton