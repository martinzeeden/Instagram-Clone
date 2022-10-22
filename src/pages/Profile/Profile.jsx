import React from 'react';
import ContentContainer from '../../components/ContentContainer/ContentContainer';
import styles from './Profile.module.css';
import ProfileImg from './1.JPG'
import ImageDialog from '../../components/ImageDialog/ImageDialog';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useContext } from 'react';
import { follow, getImagesOfUserByUserId, getUserDataByUsername, unfollow } from '../../services/firebase';
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

  const [pictures, setPictures] = useState([]);
  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState([]);


  useEffect(() => {
    document.title = `${username} - Instagram`

    loadProfileData();
    loadCurrentUserData();
  }, []);

  const loadProfileData = async () => {
    const userData = await getUserDataByUsername(username);
    setUserData(userData)
    setFollowers(userData.followers);
    setFollowing(userData.following);

    const images = await getImagesOfUserByUserId(userData.userId);
    images.sort((a,b) => b.dateCreated - a.dateCreated)
    setPictures(images);
  }

  const loadCurrentUserData = async () => {
    const userData = await getUserDataByUsername(currentUser.displayName);
    setCurrentUserData(userData);
  }

  const followOrUnfollowProfile =  async () => {
    console.log("follow")
    if(canUnfollow){
      await unfollow(userData.userId, currentUserData.userId)
    } else {
      await follow(userData.userId, currentUserData.userId)
    }

    await loadCurrentUserData();
    await loadProfileData();
  }
  
  return ( 
    <ContentContainer>
      <ProfileHeader 
        username={username} 
        profileImage={ProfileImg}
        disableFollowing={disableFollowing}
        canUnfollow={canUnfollow}
        picturesNumber={pictures.length}
        followersNumber={followers.length}
        followingNumber={following.length}
        followOrUnfollowProfile={followOrUnfollowProfile} />
      <div className={styles.line}/>
      <ProfilePictures reload={loadProfileData} pictures={pictures} username={username}/>
    </ContentContainer>
  );
}

export default Profile;