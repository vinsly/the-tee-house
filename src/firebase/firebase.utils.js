import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBQpneNqY4Mjbz_E7anCxgwRE44gMzb5Ho",
  authDomain: "tee-house-db.firebaseapp.com",
  databaseURL: "https://tee-house-db.firebaseio.com",
  projectId: "tee-house-db",
  storageBucket: "tee-house-db.appspot.com",
  messagingSenderId: "881820294772",
  appId: "1:881820294772:web:dc2ae892af95e060bf7b21",
  measurementId: "G-DYDY5T9SVZ",
};

export const createUserProfileDocument = async (userAuth, otherData) => {
  if (!userAuth) {
    return;
  }
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdDate = new Date();
    try {
      await userRef.set({ displayName, email, createdDate, ...otherData });
    } catch (err) {
      console.log("error", err);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
