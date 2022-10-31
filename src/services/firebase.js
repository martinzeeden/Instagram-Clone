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

export async function comment(docId, comment, activeUser) {
  await firebase
    .firestore()
    .collection('photos')
    .doc(docId)
    .update({
      comments: FieldValue.arrayUnion({ comment: comment, displayName: activeUser })
    })
}

export async function follow(userIdToFollow, activeUserId){
  console.log('userIdToFollow', userIdToFollow);
  console.log('activeUserId', activeUserId)
  const userToFollow = await getUserDataByUserId(userIdToFollow);
  const activeUser = await getUserDataByUserId(activeUserId);

  const docIdUserToFollow = userToFollow.docId;
  const docIdActiveUser = activeUser.docId;

  await firebase.firestore()
    .collection('users')
    .doc(docIdUserToFollow)
    .update({
      followers: FieldValue.arrayUnion(activeUserId)
    })

  await firebase.firestore()
    .collection('users')
    .doc(docIdActiveUser)
    .update({
      following: FieldValue.arrayUnion(userIdToFollow)
    })
}

export async function unfollow(userIdToUnfollow, activeUserId){
  console.log('userIdToFollow', userIdToUnfollow);
  console.log('activeUserId', activeUserId)
  const userToUnfollow = await getUserDataByUserId(userIdToUnfollow);
  const activeUser = await getUserDataByUserId(activeUserId);

  const docIdUserToUnfollow = userToUnfollow.docId;
  const docIdActiveUser = activeUser.docId;

  await firebase.firestore()
    .collection('users')
    .doc(docIdUserToUnfollow)
    .update({
      followers: FieldValue.arrayRemove(activeUserId)
    })

  await firebase.firestore()
    .collection('users')
    .doc(docIdActiveUser)
    .update({
      following: FieldValue.arrayRemove(userIdToUnfollow)
    })
}

export async function likePhoto(docId, activeUser) {
  await firebase
    .firestore()
    .collection('photos')
    .doc(docId)
    .update({
      likes: FieldValue.arrayUnion(activeUser)
    })
}

export async function getPhotoByDocId(docId){
  const result = await firebase
    .firestore()
    .collection('photos')
    .doc(docId)
    .get();

    return {
      ...result.data(),
      docId
    };
}

export async function unlikePhoto(docId, activeUser) {
   await firebase
    .firestore()
    .collection('photos')
    .doc(docId)
    .update({
      likes: FieldValue.arrayRemove(activeUser)
    })
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
    
    const userDataArray =  result.docs.map(doc => ({
      ...doc.data(),
      docId: doc.id
    }));
    return userDataArray[0];
}

export async function getUserDataByUserId(userId) {
  const result = await firebase
    .firestore()
    .collection('users')
    .where('userId', '==', userId)
    .get();

    const userDataArray =  result.docs.map(doc => ({
      ...doc.data(),
      docId: doc.id
    }));
    return userDataArray[0];
}

export async function getImagesOfUserByUserId(userId) {
  const result = await firebase
    .firestore()
    .collection('photos')
    .where('userId', '==', userId)
    .get();
  
  return result.docs.map(doc => ({
    ...doc.data(),
    docId: doc.id
  }));
}

export async function getPhotos(userId, following) {
  const result = await firebase
    .firestore()
    .collection('photos')
    .where('userId', 'in', following)
    .get();

  const userFollowedPhotos = result.docs.map((photo) => ({
    ...photo.data(),
    docId: photo.id
  }));

  return userFollowedPhotos
}

export async function getSuggestedProfiles(userId, following){
  const result  = await firebase
    .firestore()
    .collection('users')
    .where('userId', 'not-in', [...following, userId])
    .limit(3)
    .get();

    return result.docs.map((doc) => ({
      ...doc.data(),
      docId: doc.id
    }))
}

export async function getAllUsernames(currentUserId){
  const result = await firebase
    .firestore()
    .collection('users')
    .where('userId', '!=', currentUserId)
    .get();

  return result.docs
    .map((doc) => ({...doc.data()}))
    .map(({ username }) => username)
}

export async function post(photoObj) {
  await firebase.firestore().collection('photos').add(photoObj);
}

