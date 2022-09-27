import React from 'react';
import styles from './Content.module.css';
import Image from './1.JPG'
import Comment from '../Comment/Comment';
import HeartIcon from '../../assets/icons/heart.svg';
import ChatIcon from '../../assets/icons/chat.svg';

const Content = ({ }) => (
  <div className={styles.container}>
    <div className={styles.accountContainer}>
      <img src={Image}/>
      <p>Martin Zeeden</p>
    </div>
    <img className={styles.image} src={Image} alt="" />
    <div className={styles.actionContainer}>
      <img src={HeartIcon} alt="" />
      <img src={ChatIcon} alt="" />
    </div>
    <div className={styles.likesContainer}>
      <p className={styles.likes}><b>323</b>Likes</p>
      <p className={styles.likes}>-</p>
      <p className={styles.likes}><b>67</b>Comments</p>
    </div>
    <p className={styles.viewAllComments}>View all 6 comments</p>
    <div className={styles.commentContainer}>
      <Comment username="Maze" comment="Mega Bild"/>
      <Comment username="Rudy" comment="Toll !!!"/>
      <Comment username="Trymacs" comment="Ich hab Völler gezogen"/>
    </div>
    <p className={styles.uploadTime}>5 MONTHS AGO</p>
    <div className={styles.addCommentContainer}>
      <input placeholder='Add a comment'/>
      <button>Post</button>
    </div>
  </div>
)

export default Content;