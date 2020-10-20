import firebase, { firestore } from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyAOI630EOSv-EH_qcEo4IPJo12tnGdnVQg",
  authDomain: "junto-name.firebaseapp.com",
  databaseURL: "https://junto-name.firebaseio.com",
  projectId: "junto-name",
  storageBucket: "junto-name.appspot.com",
  messagingSenderId: "636679189587",
  appId: "1:636679189587:web:0e8055741aa21b5a58c2a6",
  measurementId: "G-9KB9DD1DFT",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
