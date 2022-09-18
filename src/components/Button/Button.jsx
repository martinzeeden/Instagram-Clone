import React from 'react';
import styles from './Button.module.css';

const Button = ({ onClick, label, className }) => {
    return (
        <button className={`${styles.button} ${className}`} onClick={onClick}>{label}</button>
    )
}

export default Button