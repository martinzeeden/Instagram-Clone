import React, { useContext, useState } from 'react';
import Comment from '../Comment/Comment';
import Dialog from '../Dialog/Dialog';
import styles from './ImageDialog.module.css';
import HeartIcon from '../../assets/icons/heart.svg';
import HeartRedIcon from '../../assets/icons/heart-red.svg'
import ProfileImg from '../Content/1.JPG';
import { formatDate } from '../../helpers/format';
import { getPhotoByDocId, likePhoto, unlikePhoto, comment } from '../../services/firebase';
import UserContext from '../../context/user';
import { useRef } from 'react';

const ImageDialog = ({ onClose, image, username }) => {
  const { currentUser } = useContext(UserContext);
  const [currentImage, setCurrentImage] = useState(image);
  const userLikedPhoto = currentImage.likes.includes(currentUser.displayName);
  const commentRef = useRef();

  const likeImage = async () => {   
    if(userLikedPhoto){
      await unlikePhoto(currentImage.docId, currentUser.displayName)
    } else {
      await likePhoto(currentImage.docId, currentUser.displayName)
    }

    await updatePhotoData();
  }

  const updatePhotoData = async () => {
    const updatedImage = await getPhotoByDocId(image.docId)
    setCurrentImage(updatedImage)
  }

  const post = async () => {
    await comment(currentImage.docId, commentRef.current.value, currentUser.displayName);
    await updatePhotoData();
    commentRef.current.value = '';
  }

  return (
    <Dialog onClose={onClose}>
      <div className={styles.imageDialog}>
        <img src={currentImage.imageSrc} alt="" />
        <div className={styles.imageDialogContent}>
          <div>
            <div className={styles.dialogContentAccountContainer}>
              <img src={ProfileImg} alt="" />
              <p className={styles.dialogUsername}>{username}</p>
              <p className={styles.dialogContentAccountContainerButton}>Follow</p>
            </div>
            <p className={styles.dialogDescription}>{currentImage.caption}</p>
            <div className={styles.dialogCommentContainer}>
              {currentImage.comments.map((comment) => <Comment username={comment.displayName} comment={comment.comment}/>)}
            </div>
          </div>
          <div>
            <p className={styles.uploadTime}>{formatDate(image.dateCreated)}</p>  
            <div className={styles.dialogLikeContainer}>
              <img src={userLikedPhoto ? HeartRedIcon : HeartIcon} alt="" onClick={() => likeImage()}/>
              <p><b>{currentImage.likes.length}</b> Likes</p>
            </div>
            <div className={styles.addCommentContainer}>
              <input placeholder='Add a comment' ref={commentRef}/>
              <button onClick={post}>Post</button>
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default ImageDialog;