import React, { useRef, useState } from 'react';
import styles from './Content.module.css';
import Image from '../../assets/icons/account.svg'
import Comment from '../Comment/Comment';
import HeartIcon from '../../assets/icons/heart.svg';
import HeartRedIcon from '../../assets/icons/heart-red.svg';
import { comment, getUserDataByUserId, likePhoto, unlikePhoto } from '../../services/firebase';
import { useContext } from 'react';
import UserContext from '../../context/user';
import { formatDate } from '../../helpers/format';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Content = ({ photo, reload }) => {
  const { currentUser } = useContext(UserContext);
  const userLikedPhoto = photo.likes.includes(currentUser.displayName);
  const [numOfCommentsToShow, setNumOfCommentsToShow] = useState(3);
  const [photoUserData, setPhotoUserData] = useState(null);
  const commentRef = useRef();
  const navigate = useNavigate()

  useEffect(() => {
    const loadUserData = async () => {
      const data = await getUserDataByUserId(photo.userId);
      setPhotoUserData(data)
    }

    loadUserData()
  }, []);

  const post = async () => {
    await comment(photo.docId, commentRef.current.value, currentUser.displayName);
    await reload();
    commentRef.current.value = '';
  }

  const viewAllComments = () => {
    setNumOfCommentsToShow(numOfCommentsToShow === 3 ? photo.comments.length : 3);
  }

  const likeImage = async () => {   
    if(userLikedPhoto){
      await unlikePhoto(photo.docId, currentUser.displayName)
    } else {
      await likePhoto(photo.docId, currentUser.displayName)
    }

    await reload()();
  }

  const showProfile = () => {
    navigate(`/profile/${photoUserData?.username}`)
  }
  
  return (
    <div className={styles.container}>
      <div className={styles.accountContainer} onClick={showProfile}>
        <img src={Image}/>
        <p>{photoUserData?.username}</p>
      </div>
      <img className={styles.image} src={photo.imageSrc} alt="" />
      <div className={styles.actionContainer}>
        <img src={userLikedPhoto ? HeartRedIcon : HeartIcon} alt="" onClick={() => likeImage()}/>
        <div className={styles.likesContainer}>
          <p className={styles.likes}><b>{photo.likes.length}</b>Likes</p>
          <p className={styles.likes}>-</p>
          <p className={styles.likes}><b>{photo.comments.length}</b>Comments</p>
      </div>
      </div>
      
      {photo.comments.length > 3 && <p className={styles.viewAllComments} onClick={viewAllComments}>View all {photo.comments.length} comments</p>}
      <div className={styles.commentContainer}>
        {photo.comments.slice(0,numOfCommentsToShow).map(comment => <Comment username={comment.displayName} comment={comment.comment}/>)}
      </div>
      <p className={styles.uploadTime}>Uploaded on {formatDate(photo.dateCreated)}</p>
      <div className={styles.addCommentContainer}>
        <input placeholder='Add a comment' ref={commentRef}/>
        <button onClick={post}>Post</button>
      </div>
    </div>
  )
}

export default Content;