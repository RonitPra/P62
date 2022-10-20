
import firebase from "firebase"

 var firebaseConfig = {
  apiKey: "AIzaSyD1s0MHjSTqwBhicpKKRaLcD30W9jxPRwc",
  authDomain: "school-attendance-app-fc9e4.firebaseapp.com",
  databaseURL: "https://school-attendance-app-fc9e4-default-rtdb.firebaseio.com",
  projectId: "school-attendance-app-fc9e4",
  storageBucket: "school-attendance-app-fc9e4.appspot.com",
  messagingSenderId: "192475943886",
  appId: "1:192475943886:web:924368fb3e7c5bb144119f",
  measurementId: "G-VPTGD5BF63"
  };

  firebase.initializeApp(firebaseConfig)


export default firebase.database()