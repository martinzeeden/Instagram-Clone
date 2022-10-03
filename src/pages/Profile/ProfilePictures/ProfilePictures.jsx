import React from 'react';
import ProfileImage from '../../../components/ProfileImage/ProfileImage';
import styles from './ProfilePictures.module.css';

const ProfilePictures = ({ pictures }) => {
  return (
    <div className={styles.grid}>
      {pictures.map(image => (
        <ProfileImage 
          image={image.imageSrc} 
          likes={image.likes.length} 
          comments={image.comments.length}/>
      ))}
    </div>
  )
}

export default ProfilePictures;