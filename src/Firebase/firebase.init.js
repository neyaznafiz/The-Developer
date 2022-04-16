// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcJ3zIKMZD2WyuXQQxRmHXqQYbi3Cp-WA",
  authDomain: "the-developer-neyaz.firebaseapp.com",
  projectId: "the-developer-neyaz",
  storageBucket: "the-developer-neyaz.appspot.com",
  messagingSenderId: "772377276011",
  appId: "1:772377276011:web:f9ab13e00ca33b01ff4b2e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth