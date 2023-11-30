// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBKNtukXVetVX3qm8ZUZFSDsRQzCBed2E",
  authDomain: "netflixgpt-cee43.firebaseapp.com",
  projectId: "netflixgpt-cee43",
  storageBucket: "netflixgpt-cee43.appspot.com",
  messagingSenderId: "775995877714",
  appId: "1:775995877714:web:7bfddb12985a494831f28b",
  measurementId: "G-DNBM8EPST6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth()