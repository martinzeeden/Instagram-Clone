import React from 'react';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import styles from './ContentContainer.module.css';

const ContentContainer = ({ children }) => (
  <div className={styles.container}>
  <div className={styles.contentContainer}>
    <DashboardHeader/>
    <div className={styles.content}>
      {children}
    </div>
  </div>
</div>
)

export default ContentContainer;