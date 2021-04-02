// import firebase from "firebase/app";

import firebase from "firebase";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyBHhqmHF2EXGxt957m9p1ZMdEX5bdMpl9s",
  authDomain: "myapp-1b9d8.firebaseapp.com",
  projectId: "myapp-1b9d8",
  storageBucket: "myapp-1b9d8.appspot.com",
  messagingSenderId: "164777977680",
  appId: "1:164777977680:web:32c2dfa004acdf57ab6e55",
};
const db = firebase.initializeApp(firebaseConfig);

export default db;
