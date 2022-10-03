import React from 'react';
import ContentContainer from '../../components/ContentContainer/ContentContainer';
import styles from './Profile.module.css';
import ProfileImg from './1.JPG'
import ImageDialog from '../../components/ImageDialog/ImageDialog';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useContext } from 'react';
import { getImagesOfUserByUserId, getUserDataByUsername } from '../../services/firebase';
import { useState } from 'react';
import UserContext from '../../context/user';
import ProfilePictures from './ProfilePictures/ProfilePictures';
import ProfileHeader from './ProfileHeader/ProfileHeader';

const Profile = () => {
  const params = useParams();
  const { username } = params; 
  const { currentUser } = useContext(UserContext);
  const [userData, setUserData] = useState(null);
  const [currentUserData, setCurrentUserData] = useState(null);

  const disableFollowing = username === currentUser.displayName;
  const canUnfollow = (currentUser && userData) ? userData?.followers.includes(currentUserData?.userId) : false;

  console.log('disableFollowing', disableFollowing);
  console.log('canUnfollow', canUnfollow)

  console.log(currentUserData)

  const [pictures, setPictures] = useState([]);
  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState([])

  useEffect(() => {
    document.title = `${username} - Instagram`

    const loadProfileData = async () => {
      const userData = await getUserDataByUsername(username);
      setUserData(userData)
      setFollowers(userData.followers);
      setFollowing(userData.following);

      const images = await getImagesOfUserByUserId(userData.userId);
      setPictures(images);
    }

    const loadCurrentUserData = async () => {
      const userData = await getUserDataByUsername(currentUser.displayName);
      setCurrentUserData(userData);
    }

    loadProfileData();
    loadCurrentUserData();
  }, []);
  
  return ( 
    <ContentContainer>
      <ProfileHeader 
        username={username} 
        profileImage={ProfileImg}
        disableFollowing={disableFollowing}
        canUnfollow={canUnfollow}
        picturesNumber={pictures.length}
        followersNumber={followers.length}
        followingNumber={following.length} />
      <div className={styles.line}/>
      <ProfilePictures pictures={pictures}/>
      {/* <ImageDialog/> */}
    </ContentContainer>
  );
}

export default Profile;