import React from 'react';
import Comment from '../Comment/Comment';
import Dialog from '../Dialog/Dialog';
import styles from './ImageDialog.module.css';
import HeartIcon from '../../assets/icons/heart.svg';
import ProfileImg from '../Content/1.JPG';

const ImageDialog = ({ onClose }) => (
  <Dialog onClose={onClose}>
      <div className={styles.imageDialog}>
        <img src={ProfileImg} alt="" />
        <div className={styles.imageDialogContent}>
          <div>
            <div className={styles.dialogContentAccountContainer}>
              <img src={ProfileImg} alt="" />
              <p className={styles.dialogUsername}>Username</p>
              <p className={styles.dialogContentAccountContainerButton}>Follow</p>
            </div>
            <p className={styles.dialogDescription}>Beschreibung</p>
            <div className={styles.dialogCommentContainer}>
              <Comment username="Test" comment="Hier steht ein Kommentar" />
              <Comment username="Test" comment="Hier steht ein Kommentar" />
              <Comment username="Test" comment="Hier steht ein Kommentar" />
              <Comment username="Test" comment="Hier steht ein Kommentar" />
              <Comment username="Test" comment="Hier steht ein Kommentar" />
              <Comment username="Test" comment="Hier steht ein Kommentar" />
              <Comment username="Test" comment="Hier steht ein Kommentar" />
            </div>
          </div>
          <div>
            <p className={styles.uploadTime}>5 MONTHS AGO</p>  
            <div className={styles.dialogLikeContainer}>
              <img src={HeartIcon} alt="" />
              <p><b>656</b> Likes</p>
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

export default ImageDialog;