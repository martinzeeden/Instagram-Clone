import React, { useState } from 'react';
import ImageDialog from '../../../components/ImageDialog/ImageDialog';
import ProfileImage from '../../../components/ProfileImage/ProfileImage';
import styles from './ProfilePictures.module.css';

const ProfilePictures = ({ pictures, username, reload }) => {
  const [openImage, setOpenImage] = useState(null);

  return (
    <>
      <div className={styles.grid}>
        {pictures.map(image => (
          <ProfileImage 
            onClick={() => setOpenImage(image)}
            image={image.imageSrc} 
            likes={image.likes.length} 
            comments={image.comments.length}/>
        ))}
      </div>
      {openImage && <ImageDialog reload={reload} username={username} image={openImage} onClose={() => setOpenImage(null)}/>}
    </>
  )
}

export default ProfilePictures;