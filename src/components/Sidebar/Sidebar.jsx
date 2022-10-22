import React, { useState } from 'react';
import { useEffect } from 'react';
import { getSuggestedProfiles } from '../../services/firebase';
import SuggestedProfile from '../SuggestedProfile/SuggestedProfile';
import styles from './Sidebar.module.css'

const Sidebar = ({ currentUserData }) => {
  const [suggestedProfiles, setSuggestedProfiles] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const suggestedProfiles = await getSuggestedProfiles(currentUserData?.userId, currentUserData?.following);
      setSuggestedProfiles(suggestedProfiles)
    }

    loadData()
  }, [])

  return (
    <div className={styles.sidebar}>
      <h3 className={styles.sidebarHeadline}>Suggestions for you</h3>
      <div className={styles.line}/>
      {suggestedProfiles.map((profile) => (
        <SuggestedProfile 
          profileImage={profile.image} 
          username={profile.username}/>
      ))}
    </div>
  )
}

export default Sidebar