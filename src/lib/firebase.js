import Firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const config = {
    apiKey: "AIzaSyBUL6BpyOoP__E_K9BgaAExpY-JFFx6iDY",
    authDomain: "instagram-clone-e783b.firebaseapp.com",
    projectId: "instagram-clone-e783b",
    storageBucket: "instagram-clone-e783b.appspot.com",
    messagingSenderId: "406960290278",
    appId: "1:406960290278:web:29c4142c85bbdb0f197e27"
}

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue }