import firebase from 'firebase'
import 'firebase/firestore'


  var config = {
    apiKey: "AIzaSyBdRtUpT2Px1z0kv_jYQNKzZgh4M7Ljwzc",
    authDomain: "book-store-bb812.firebaseapp.com",
    databaseURL: "https://book-store-bb812.firebaseio.com",
    projectId: "book-store-bb812",
    storageBucket: "book-store-bb812.appspot.com",
    messagingSenderId: "83468495331"
  };
  firebase.initializeApp(config);
  const db = firebase.firestore();
  export default db;