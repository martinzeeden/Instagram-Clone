import React from 'react';
import styles from './FollowButton.module.css'

const FollowButton = ({ canUnfollow, onClick }) => {
  return (
    <button onClick={onClick} className={canUnfollow ? styles.unfollow : styles.follow}>{canUnfollow ? 'Unfollow' : 'Follow'}</button>
  )
};

export default FollowButton