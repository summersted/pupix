import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  updateEmail,
  updatePassword,
} from "firebase/auth";

const firebaseApp = initializeApp({
    apiKey: "AIzaSyAgUrbfFyQhy-pY4RhnXr0F8EKGYi5yrz8",
    authDomain: "pupex-55ea9.firebaseapp.com",
    projectId: "pupex-55ea9",
    storageBucket: "pupex-55ea9.appspot.com",
    messagingSenderId: "281501472572",
    appId: "1:281501472572:web:e51bdb6cee5f56ecd47039"
});

export const auth = getAuth();
export const createUser = createUserWithEmailAndPassword;
export const signInUser = signInWithEmailAndPassword;
export const resetPassword = sendPasswordResetEmail;
export const changeEmail = updateEmail;
export const changePassword = updatePassword;
export default firebaseApp;