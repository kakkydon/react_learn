import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/firebase-storage';

var firebaseConfig = {
    apiKey: "AIzaSyAMgSns-9gkHviv4QpKcGWv2A-bCm3G3ME",
    authDomain: "react-learn-67416.firebaseapp.com",
    databaseURL: "https://react-learn-67416.firebaseio.com",
    projectId: "react-learn-67416",
    storageBucket: "react-learn-67416.appspot.com",
    messagingSenderId: "889715225685",
    appId: "1:889715225685:web:2cfad927ae9e0f0ae490dc",
    measurementId: "G-148DZT530E"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;