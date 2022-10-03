import { firebase, FieldValue } from '../lib/firebase';

export async function doesUsernameExist(username) {
  const result = await firebase
    .firestore()
    .collection('users')
    .where('username', '==', username)
    .get();

  console.log(result);

  return result.docs.length > 0;
}

export async function doesEmailAddressExist(emailAddress) {
  const result = await firebase
    .firestore()
    .collection('users')
    .where('emailAddress', '==', emailAddress)
    .get();

    return result.docs.length > 0;
}

export async function getUserDataByUsername(username) {
  const result = await firebase
    .firestore()
    .collection('users')
    .where('username', '==', username)
    .get();
    
    const userDataArray =  result.docs.map(doc => doc.data());
    return userDataArray[0];
}

export async function getImagesOfUserByUserId(userId) {
  const result = await firebase
    .firestore()
    .collection('photos')
    .where('userId', '==', userId)
    .get();
  
  return result.docs.map(doc => doc.data());
}

