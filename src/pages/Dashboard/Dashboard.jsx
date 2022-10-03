import React from 'react';
import { useEffect } from 'react';
import Content from '../../components/Content/Content';
import ContentContainer from '../../components/ContentContainer/ContentContainer';
import styles from './Dashboard.module.css';

const Dashboard = () => {

  useEffect(() => {
    document.title = 'Instagram'
  }, [])

  return (
    <ContentContainer>
      <Content/>
      <Content/>
    </ContentContainer>
  );
};

export default Dashboard;
