// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhHXrRu1immLJ9vQeYdlXCVP9YpWRETao",
  authDomain: "insta-clone-2200c.firebaseapp.com",
  projectId: "insta-clone-2200c",
  storageBucket: "insta-clone-2200c.appspot.com",
  messagingSenderId: "1016166636405",
  appId: "1:1016166636405:web:a653d882b6c047e222513c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };