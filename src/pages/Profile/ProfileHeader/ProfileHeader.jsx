import React from 'react';
import FollowButton from '../../../components/FollowButton/FollowButton';
import styles from './ProfileHeader.module.css';

const ProfileHeader = ({
  profileImage, username, disableFollowing, canUnfollow, picturesNumber, followersNumber, followingNumber, description, followOrUnfollowProfile
}) => {
  return (
    <div className={styles.topContainer}>
      <img src={profileImage} alt="Profilepicture" className={styles.profileImage}/>
      <div className={styles.nameContainer}>
        <div className={styles.usernameContainer}>
          <h3 className={styles.username}>{username}</h3>
          {!disableFollowing && (<FollowButton onClick={followOrUnfollowProfile} canUnfollow={canUnfollow}/>)}
        </div>
        <div className={styles.profileStatsContainer}>
          <p><b>{picturesNumber}</b> Pictures</p>
          <p><b>{followersNumber}</b> Follower</p>
          <p><b>{followingNumber}</b> Following</p>
        </div>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  )
}

export default ProfileHeader;