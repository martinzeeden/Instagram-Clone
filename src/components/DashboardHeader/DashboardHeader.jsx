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

const DashboardHeader = () => {
  const { firebase } = useContext(FirebaseContext);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <header className={styles.headerContainer}>
      <div className={styles.header}>
        <h1>Instagram</h1>
        <div className={styles.buttonBox}>
          {/* <IconButton icon={IconAdd}/> */}
          <IconButton icon={IconHome} onClick={() => navigate(DASHBOARD)}/>
          <IconButton icon={IconSettings}/>
          <IconButton icon={IconLogout} onClick={() => firebase.auth().signOut()}/>
          <button className={styles.avatar} onClick={() => navigate(`profile/${user.displayName}`)}>
            <img src={`images/avatars/${"martin"}.jpg`}alt=""/>
          </button>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;