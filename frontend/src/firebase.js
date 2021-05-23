import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";


const  firebaseConfig = {
    apiKey: "AIzaSyB6byr65ET7YqCCgzICKDe32i2qGBHr6pU",
    authDomain: "groceryappauth.firebaseapp.com",
    projectId: "groceryappauth",
    storageBucket: "groceryappauth.appspot.com",
    messagingSenderId: "101149236704",
    appId: "1:101149236704:web:efda35a287e9a85469df85",
    measurementId: "G-FSVHGJZLBB"
  };

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();