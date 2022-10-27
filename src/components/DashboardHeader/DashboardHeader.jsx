import React from 'react';
import styles from './DashboardHeader.module.css';
import IconAdd from '../../assets/icons/add.svg';
import IconHome from '../../assets/icons/home.svg';
import IconLogout from '../../assets/icons/logout.svg';
import IconButton from '../IconButton/IconButton';
import { useContext } from 'react';
import FirebaseContext from '../../context/firebase';
import UserContext from '../../context/user';
import { useNavigate } from 'react-router-dom';
import { DASHBOARD } from '../../constants/Routes';
import Avatar from '../Avatar/Avatar';
import UserSearch from '../UserSearch/UserSearch';
import { useState } from 'react';
import UploadImageDialog from '../UploadImageDialog/UploadImageDialog';

const DashboardHeader = () => {
  const { firebase } = useContext(FirebaseContext);
  const { currentUser } = useContext(UserContext);
  const [openUploadImageDialog, setOpenUploadImageDialog] = useState(false)
  const navigate = useNavigate();

  return (
    <header className={styles.headerContainer}>
      <div className={styles.header}>
        <h1>Instagram</h1>
        <div className={styles.buttonBox}>
          <UserSearch/>
          <IconButton icon={IconAdd} onClick={() => setOpenUploadImageDialog(true)}/>
          <IconButton icon={IconHome} onClick={() => navigate(DASHBOARD)}/>
          <IconButton icon={IconLogout} onClick={() => firebase.auth().signOut()}/>
          <Avatar user={currentUser}/>
        </div>
      </div>
      {openUploadImageDialog && <UploadImageDialog onClose={() => setOpenUploadImageDialog(false)}/>}
    </header>
  );
};

export default DashboardHeader;