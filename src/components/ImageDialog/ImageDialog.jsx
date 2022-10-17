import React from 'react';
import Comment from '../Comment/Comment';
import Dialog from '../Dialog/Dialog';
import styles from './ImageDialog.module.css';
import HeartIcon from '../../assets/icons/heart.svg';
import ProfileImg from '../Content/1.JPG';
import { formatDate } from '../../helpers/format';

const ImageDialog = ({ onClose, image, username }) => {
  return (
    <Dialog onClose={onClose}>
      <div className={styles.imageDialog}>
        <img src={image.imageSrc} alt="" />
        <div className={styles.imageDialogContent}>
          <div>
            <div className={styles.dialogContentAccountContainer}>
              <img src={ProfileImg} alt="" />
              <p className={styles.dialogUsername}>{username}</p>
              <p className={styles.dialogContentAccountContainerButton}>Follow</p>
            </div>
            <p className={styles.dialogDescription}>{image.caption}</p>
            <div className={styles.dialogCommentContainer}>
              {image.comments.map((comment) => <Comment username={comment.displayName} comment={comment.comment}/>)}
            </div>
          </div>
          <div>
            <p className={styles.uploadTime}>{formatDate(image.dateCreated)}</p>  
            <div className={styles.dialogLikeContainer}>
              <img src={HeartIcon} alt="" />
              <p><b>{image.likes.length}</b> Likes</p>
            </div>
            <div className={styles.addCommentContainer}>
              <input placeholder='Add a comment'/>
              <button>Post</button>
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default ImageDialog;