// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "nextjs-blog-app-db30b.firebaseapp.com",
  projectId: "nextjs-blog-app-db30b",
  storageBucket: "nextjs-blog-app-db30b.appspot.com",
  messagingSenderId: "26804503339",
  appId: "1:26804503339:web:7303f1bf3c20b9b5937b6e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);