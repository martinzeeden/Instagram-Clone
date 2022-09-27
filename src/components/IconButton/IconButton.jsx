import React from 'react';
import styles from './IconButton.module.css';

const IconButton = ({ icon, onClick, disabled }) => (
  <button className={styles.iconButton}>
    <img className={styles.icon} src={icon} alt="Icon"/>
  </button>
);

export default IconButton