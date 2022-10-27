import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Avatar.module.css';

const Avatar = ({ user }) => {
  const navigate = useNavigate();

  return (
    <button className={styles.avatar} onClick={() => navigate(`profile/${user.displayName}`)}>
      <img src={`/images/avatars/${"martin"}.jpg`} alt=""/>
    </button>
  );
}

export default Avatar;