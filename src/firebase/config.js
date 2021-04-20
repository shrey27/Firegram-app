import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyBkPBJXWg9szOo2JhTN280EwZG6Zw3KrEg",
    authDomain: "firegram-f2abd.firebaseapp.com",
    projectId: "firegram-f2abd",
    storageBucket: "firegram-f2abd.appspot.com",
    messagingSenderId: "55752678195",
    appId: "1:55752678195:web:ac9b029bc1babfa6a93c46"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };