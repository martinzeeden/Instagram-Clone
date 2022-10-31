import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import Content from '../../components/Content/Content';
import ContentContainer from '../../components/ContentContainer/ContentContainer';
import Sidebar from '../../components/Sidebar/Sidebar';
import UploadImageDialog from '../../components/UploadImageDialog/UploadImageDialog';
import UserContext from '../../context/user';
import { getPhotos, getUserDataByUsername } from '../../services/firebase';

const Dashboard = () => {
  const { currentUser } = useContext(UserContext);
  const [currentUserData, setCurrentUserData] = useState(null);
  const [photos, setPhotos] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    document.title = 'Instagram'

    loadProfileData();
  }, [])

  useEffect(() => {
    loadFollowedUserPhotos();
  }, [currentUserData])

  const loadProfileData = async () => {
    setLoading(true)
    const userData = await getUserDataByUsername(currentUser.displayName);
    setCurrentUserData(userData);
    setLoading(false)
  }

  const loadFollowedUserPhotos = async () => {
    if(currentUserData?.following?.length > 0){
      const followedUserPhoto = await getPhotos(currentUserData.userId, currentUserData.following);
      followedUserPhoto.sort((a,b) => b.dateCreated - a.dateCreated);
      setPhotos(followedUserPhoto)
    }
  }

  // if(loading) return <div/>

  return (
    <ContentContainer>
      {photos.map((photo) => (
        <Content key={photo.photoId} photo={photo} reload={loadFollowedUserPhotos}/>
      ))}
    </ContentContainer>
  );
};

export default Dashboard;
