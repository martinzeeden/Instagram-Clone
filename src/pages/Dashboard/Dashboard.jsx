import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import Content from '../../components/Content/Content';
import ContentContainer from '../../components/ContentContainer/ContentContainer';
import UserContext from '../../context/user';
import { getPhotos, getUserDataByUsername } from '../../services/firebase';
import styles from './Dashboard.module.css';

const Dashboard = () => {
  const { currentUser } = useContext(UserContext);
  const [currentUserData, setCurrentUserData] = useState(null);
  const [photos, setPhotos] = useState([])

  useEffect(() => {
    document.title = 'Instagram'

    loadProfileData();
  }, [])

  useEffect(() => {
    loadFollowedUserPhotos();
  }, [currentUserData])

  const loadProfileData = async () => {
    const userData = await getUserDataByUsername(currentUser.displayName);
    setCurrentUserData(userData);
  }

  const loadFollowedUserPhotos = async () => {
    if(currentUserData?.following?.length > 0){
      const followedUserPhoto = await getPhotos(currentUserData.userId, currentUserData.following);
      followedUserPhoto.sort((a,b) => b.dateCreated - a.dateCreated);
      setPhotos(followedUserPhoto)
    }
  }

  return (
    <ContentContainer>
      {photos.map((photo) => (
        <Content key={photo.photoId} photo={photo} reload={loadFollowedUserPhotos}/>
      ))}
    </ContentContainer>
  );
};

export default Dashboard;
