import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../../context/user';
import { getAllUsernames } from '../../services/firebase';
import styles from './UserSearch.module.css';
import SearchIcon from '../../assets/icons/search.svg'

const UserSearch = () => {
  const { currentUser } = useContext(UserContext);
  const [allUsernames, setAllUsernames] = useState([]);
  const [filteredUsernames, setFilteredUsernames] = useState([]);
  const [searchUsername, setSearchUsername] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const loadAllUsernames = async () => {
      const usernames = await getAllUsernames(currentUser.uid)
      setAllUsernames(usernames)
    }

    loadAllUsernames()
  }, [])

  useEffect(() => {
    const filtered = allUsernames.filter((username) => username.startsWith(searchUsername));
    setFilteredUsernames(filtered)
  }, [searchUsername])

  return (
    <div>
      <div className={styles.searchBox}>
        <img src={SearchIcon} alt="Search"/>
        <input 
          placeholder='Search username' 
          value={searchUsername} 
          onChange={(e) => setSearchUsername(e.target.value)}/>
      </div>
      {searchUsername.length > 0 && (
        <div className={styles.suggestions}>
          {filteredUsernames.length > 0 ? (
            <ul>
              {filteredUsernames.map((username) => (
                <li onClick={() => navigate(`/profile/${username}`)}>{username}</li>
              ))}
            </ul>
          ) : (
            <div>No users found</div>
          )}
        </div>
      )}
    </div>
  )
}

export default UserSearch;