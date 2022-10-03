import React from 'react'
import styles from './ProfileImage.module.css';
import HeartIcon from '../../assets/icons/heart.svg';
import ChatIcon from '../../assets/icons/chat.svg';

const ProfileImage = ({ image, likes, comments, onClick }) => (
  <div className={styles.imageOverlayContainer} onClick={onClick}>
    <div className={styles.imageOverlay}>
      <div className={styles.imageOverlayItem}>
        <img src={HeartIcon} alt="Like Icon"/>
        <p>{likes}</p>
      </div>
      <div className={styles.imageOverlayItem}>
        <img src={ChatIcon} alt="Comment Icon"/>
        <p>{comments}</p>
      </div>
    </div>
    <img src={image} className={styles.image} alt="Upload"/>
  </div>
);

export default ProfileImage;