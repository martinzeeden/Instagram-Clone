import React from 'react';
import styles from './Comment.module.css';

const Comment = ({ username, comment }) => (
  <p className={styles.comment}><b>{username}</b> {comment}</p>
)

export default Comment;