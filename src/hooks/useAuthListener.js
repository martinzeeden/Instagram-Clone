import React, { useContext, useEffect, useState, } from 'react'
import FirebaseContext from '../context/firebase'

export default function useAuthListener (){
  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('authUser')));
  const { firebase} = useContext(FirebaseContext);

  useEffect(() => {
    const listener = firebase.auth().onAuthStateChanged((authUser) => {
      if(authUser){
        localStorage.setItem('authUser', JSON.stringify(authUser));
        setCurrentUser(authUser);
      } else {
        localStorage.removeItem('authUser');
        setCurrentUser(null);
      }
    })

    return () => listener();
  }, [firebase])
  return { currentUser };
}