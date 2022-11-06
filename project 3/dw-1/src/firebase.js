import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyChK0BSuCbBnh6IBe1MuOH7J2vE-1l4fa4",
    authDomain: "dw-1-d2ad5.firebaseapp.com",
    projectId: "dw-1-d2ad5",
    storageBucket: "dw-1-d2ad5.appspot.com",
    messagingSenderId: "388064208189",
    appId: "1:388064208189:web:6e2cd8d00171e751b15154",
    measurementId: "G-P4DXRLLF6K"
  };

  const app = firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();


const db = app.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();


export {auth , googleProvider};

export default db;