import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDuX3NtNfrhDNchVw0-aWBynV7vI7ZWYMM",
  authDomain: "crwn-db-f46f6.firebaseapp.com",
  projectId: "crwn-db-f46f6",
  storageBucket: "crwn-db-f46f6.appspot.com",
  messagingSenderId: "634114462614",
  appId: "1:634114462614:web:f522b22a31a237931683b7",
  measurementId: "G-8XQJR35J6T"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date ();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account '});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;