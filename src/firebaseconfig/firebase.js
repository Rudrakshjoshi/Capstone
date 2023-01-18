
import { initializeApp } from "firebase/app";
import {getAuth } from "firebase/auth"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
 

  apiKey: "AIzaSyDk0Pu7uOGdp8mRP1tD2cX2kdCSJ5kAo28",
  authDomain: "cabbookingsystem-5a8fa.firebaseapp.com",
  projectId: "cabbookingsystem-5a8fa",
  storageBucket: "cabbookingsystem-5a8fa.appspot.com",
  messagingSenderId: "563768303886",
  appId: "1:563768303886:web:88c7eae13770fd0463775f",
  measurementId: "G-F7PQH58NP9"
};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth();


export {app , auth }



