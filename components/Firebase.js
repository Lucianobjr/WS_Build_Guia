import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAmN6_6RrWJf1rfSKthCZYaNlXm3oHeW5A",
    authDomain: "warspear-3a1cf.firebaseapp.com",
    databaseURL: "https://warspear-3a1cf-default-rtdb.firebaseio.com",
    projectId: "warspear-3a1cf",
    storageBucket: "warspear-3a1cf.appspot.com",
    messagingSenderId: "1080429441318",
    appId: "1:1080429441318:web:7fb7eac3a36fe839a891e7",
    measurementId: "G-SF6B5YVNXX"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;