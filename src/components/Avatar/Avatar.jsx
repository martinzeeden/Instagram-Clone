import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Avatar.module.css';
import accountImage from '../../assets/icons/account.svg'

const Avatar = ({ user }) => {
  const navigate = useNavigate();

  return (
    <button className={styles.avatar} onClick={() => navigate(`profile/${user.displayName}`)}>
      <img src={accountImage} alt=""/>
    </button>
  );
}

export default Avatar;