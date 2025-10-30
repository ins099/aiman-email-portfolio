// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, type Analytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKq4ateXsaT2xEtp0Q_nHJpXZfDJVaeS0",
  authDomain: "aiman-iqbal-portfolio.firebaseapp.com",
  projectId: "aiman-iqbal-portfolio",
  storageBucket: "aiman-iqbal-portfolio.firebasestorage.app",
  messagingSenderId: "162596353883",
  appId: "1:162596353883:web:53777d07823386efa54c7e",
  measurementId: "G-0XENC2C0JG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);