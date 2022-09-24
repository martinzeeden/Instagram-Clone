import React from 'react';
import styles from './AuthPageContainer.module.css'

const AuthPageContainer = ({ children }) => (
    <div className={styles.container}>
        <div className={styles.inputContainerWrapper}>
            <h1 className={styles.headline}>Instagram</h1>
            <div className={styles.inputContainer}>
               {children}
            </div>
        </div>
    </div>
)

export default AuthPageContainer;

