import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAqXsjdeLhLQFIwXzT2KOzCMNZ1rpolBvQ",
  authDomain: "ceptesok-975b6.firebaseapp.com",
  projectId: "ceptesok-975b6",
  storageBucket: "ceptesok-975b6.appspot.com",
  messagingSenderId: "414709718685",
  appId: "1:414709718685:web:42df350119363e696afe74",
  measurementId: "G-VYRG46PWH6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestampt = firebase.firestore.FieldValue.serverTimestampt;

export {timestampt};
export default firebase.firestore();