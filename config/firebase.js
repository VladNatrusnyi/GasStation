import {getAuth} from "firebase/auth"

import firebase from "firebase/compat/app";
import 'firebase/compat/auth'
import 'firebase/compat/database'
import {setIsRegistered} from "../store/registerSlice";

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyA5eiaO47EudjuUZV_uec2sg7lArOk7z6s",
  authDomain: "gasstation2-5e269.firebaseapp.com",
  projectId: "gasstation2-5e269",
  storageBucket: "gasstation2-5e269.appspot.com",
  messagingSenderId: "997284718156",
  appId: "1:997284718156:web:552fc97f38f39fbd11f6e9"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export const auth = getAuth()

