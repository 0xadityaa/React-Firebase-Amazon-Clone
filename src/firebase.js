// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyAVWi1ZKuvXCF9Nw4gIzMhhhlmeuRSKjLo",
    authDomain: "best-buys-2daec.firebaseapp.com",
    databaseURL: "https://best-buys-2daec.firebaseio.com",
    projectId: "best-buys-2daec",
    storageBucket: "best-buys-2daec.appspot.com",
    messagingSenderId: "576762406897",
    appId: "1:576762406897:web:380f393e3ac7aee7730650",
    measurementId: "G-8SHFD7MBM8"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };