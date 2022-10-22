import React from 'react';
import styles from './SuggestedProfile.module.css';
import TestImage from './1.JPG'
import { useNavigate } from 'react-router-dom';

const SuggestedProfile = ({ profileImage, username }) => {
  const navigate = useNavigate()
  return (
    <div className={styles.suggestedProfile}>
      <div className={styles.imageAndUsernameContainer} onClick={() => navigate(`/profile/${username}`)}>
        <img className={styles.suggestedProfileImage} src={/*profileImage*/ TestImage} alt="profileImage"/>
        <p className={styles.suggestedProfileUsername}>{username}</p>
      </div>
      <button className={styles.followButton}>Follow</button>
    </div>
  )
}

export default SuggestedProfile;