import React from 'react';
import Content from '../../components/Content/Content';
import DashboardHeader from '../../components/DashboardHeader/DashboardHeader';
import styles from './Dashboard.module.css';

const Dashboard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <DashboardHeader/>
        <div className={styles.content}>
          <Content/>
          <Content/>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
