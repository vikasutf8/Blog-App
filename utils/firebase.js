// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-create-f14b0.firebaseapp.com",
  projectId: "blog-create-f14b0",
  storageBucket: "blog-create-f14b0.appspot.com",
  messagingSenderId: "57248271257",
  appId: "1:57248271257:web:8560dc220ca799b3092108"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);