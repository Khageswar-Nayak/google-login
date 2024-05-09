import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDfMq7vsY7d5VBGJVdR6LuH9IH7kTc6o1I",
  authDomain: "login-page-754df.firebaseapp.com",
  projectId: "login-page-754df",
  storageBucket: "login-page-754df.appspot.com",
  messagingSenderId: "518295461493",
  appId: "1:518295461493:web:d93dec413ad517bd1be23c",
  measurementId: "G-6K7PJ4VV1Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth,provider};