import React from 'react';
import styles from './DashboardHeader.module.css';
import IconAdd from '../../assets/icons/add.svg';
import IconHome from '../../assets/icons/home.svg';
import IconLogout from '../../assets/icons/logout.svg';
import IconSettings from '../../assets/icons/settings.svg';
import IconButton from '../IconButton/IconButton';
import { useContext } from 'react';
import FirebaseContext from '../../context/firebase';
import UserContext from '../../context/user';
import { useNavigate } from 'react-router-dom';
import { DASHBOARD } from '../../constants/Routes';
import Avatar from '../Avatar/Avatar';

const DashboardHeader = () => {
  const { firebase } = useContext(FirebaseContext);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  console.log(user)

  return (
    <header className={styles.headerContainer}>
      <div className={styles.header}>
        <h1>Instagram</h1>
        <div className={styles.buttonBox}>
          <IconButton icon={IconAdd}/>
          <IconButton icon={IconHome} onClick={() => navigate(DASHBOARD)}/>
          <IconButton icon={IconLogout} onClick={() => firebase.auth().signOut()}/>
          <Avatar user={user}/>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;