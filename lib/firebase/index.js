// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACmvuhk0JSDxi4vAj91xWKILtZH9UCO68",
  authDomain: "finance-tracker-97f48.firebaseapp.com",
  projectId: "finance-tracker-97f48",
  storageBucket: "finance-tracker-97f48.firebasestorage.app",
  messagingSenderId: "60412083268",
  appId: "1:60412083268:web:b6400d5fe84ce2bd971011"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {app, db, auth}