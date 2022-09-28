import React from 'react';
import styles from './DashboardHeader.module.css';
import IconAdd from '../../assets/icons/add.svg';
import IconHome from '../../assets/icons/home.svg';
import IconLogout from '../../assets/icons/logout.svg';
import IconSettings from '../../assets/icons/settings.svg';
import IconButton from '../IconButton/IconButton';

const DashboardHeader = () => (
  <header className={styles.headerContainer}>
    <div className={styles.header}>
      <h1>Instagram</h1>
      <div className={styles.buttonBox}>
        <IconButton icon={IconAdd}/>
        <IconButton icon={IconHome}/>
        <IconButton icon={IconSettings}/>
        <IconButton icon={IconLogout} />
      </div>
    </div>
  </header>
);

export default DashboardHeader;