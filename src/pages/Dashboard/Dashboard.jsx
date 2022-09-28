import React from 'react';
import Content from '../../components/Content/Content';
import ContentContainer from '../../components/ContentContainer/ContentContainer';
import DashboardHeader from '../../components/DashboardHeader/DashboardHeader';
import styles from './Dashboard.module.css';

const Dashboard = () => {
  return (
    <ContentContainer>
      <Content/>
      <Content/>
    </ContentContainer>
  );
};

export default Dashboard;
