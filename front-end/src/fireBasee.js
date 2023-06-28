import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC4GlCX_nSXqggl1bX1f57ydXCJo6KNQ1w",
    authDomain: "twi-clo-86e04.firebaseapp.com",
    databaseURL: "https://twi-clo-86e04-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "twi-clo-86e04",
    storageBucket: "twi-clo-86e04.appspot.com",
    messagingSenderId: "37915826893",
    appId: "1:37915826893:web:6dd2cbdb5ba35e38b26784",
    measurementId: "G-QY260B26LW"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  

export default db;