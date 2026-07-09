// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1MA_w-XVnl9e7rIChLabxgtsTAeDIZLQ",
  authDomain: "sgw-media-production-llc-1db2b.firebaseapp.com",
  projectId: "sgw-media-production-llc-1db2b",
  storageBucket: "sgw-media-production-llc-1db2b.firebasestorage.app",
  messagingSenderId: "638393191356",
  appId: "1:638393191356:web:11a7e7d542eddb023d39b9",
  measurementId: "G-F2WHF2257N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);