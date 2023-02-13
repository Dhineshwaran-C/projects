
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC6-UueKh9RoRWAzVhJ-2XmNBocDFOD7-0",
  authDomain: "movietime-5df93.firebaseapp.com",
  projectId: "movietime-5df93",
  storageBucket: "movietime-5df93.appspot.com",
  messagingSenderId: "59617951335",
  appId: "1:59617951335:web:782353fa952cf7790b9ec2",
  measurementId: "G-5MG8WBE8EB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);