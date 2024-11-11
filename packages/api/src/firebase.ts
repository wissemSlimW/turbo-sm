// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgkVPx9Jr4jT7kCGz4M7u-m5juvi_VRZA",
  authDomain: "turbo-sm.firebaseapp.com",
  databaseURL:
    "https://turbo-sm-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "turbo-sm",
  storageBucket: "turbo-sm.appspot.com",
  messagingSenderId: "257625410665",
  appId: "1:257625410665:web:896a2c1f81acde1c5666f8",
  measurementId: "G-KS3L9T8F81",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
