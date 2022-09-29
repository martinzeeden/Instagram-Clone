import React from 'react';
import ContentContainer from '../../components/ContentContainer/ContentContainer';
import styles from './Profile.module.css';
import ProfileImg from './1.JPG'
import HeartIcon from '../../assets/icons/heart.svg';
import ChatIcon from '../../assets/icons/chat.svg';
import Dialog from '../../components/Dialog/Dialog';

const Profile = () => (
  <ContentContainer>
    <div className={styles.topContainer}>
      <img src={ProfileImg} className={styles.profileImage}/>
      <div className={styles.nameContainer}>
        <div className={styles.usernameContainer}>
          <h3 className={styles.username}>Username</h3>
          <button className={styles.followButton}>Follow</button>
        </div>
        <div className={styles.profileStatsContainer}>
          <p><b>0</b> Pictures</p>
          <p><b>0</b> Follower</p>
          <p><b>0</b> Following</p>
        </div>
        <p className={styles.description}>This is a description</p>
      </div>
    </div>
    <div className={styles.line}/>
    <div className={styles.grid}>
      {[1,2,3,4,5].map(x => (
        <div className={styles.imageOverlayContainer}>
          <div className={styles.imageOverlay}>
            <div className={styles.imageOverlayItem}>
              <img src={HeartIcon}/>
              <p>24</p>
            </div>
            <div className={styles.imageOverlayItem}>
              <img src={ChatIcon}/>
              <p>123</p>
            </div>
          </div>
          <img src={ProfileImg} className={styles.image}/>
        </div>
      ))}
    </div>
  </ContentContainer>
)

export default Profile;