import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDbY9oAzGvjkW-5WXIqFKRhjejzLWXDvzQ",
    authDomain: "linkedin-clone-8783c.firebaseapp.com",
    projectId: "linkedin-clone-8783c",
    storageBucket: "linkedin-clone-8783c.appspot.com",
    messagingSenderId: "101209661861",
    appId: "1:101209661861:web:75dc5b7576c09ec4e9c84c"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
// timestamp
const timestamp = firebase.firestore.Timestamp;

export { db, auth, timestamp };
