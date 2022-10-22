import React from 'react';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import styles from './ContentContainer.module.css';

const ContentContainer = ({ children, sidebar }) => {

  const content = sidebar ? (
    <div className={styles.contentWithSidebar}>
      <div>
        {children}
      </div>
      <div>{sidebar}</div>
    </div>
  ) : (
    <div className={styles.content}>
      {children}
    </div>
  )

  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <DashboardHeader/>
        {content}
      </div>
    </div>
  );
}

export default ContentContainer;