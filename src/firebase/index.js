/* eslint-disable no-undef */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const env = import.meta.env;
const firebaseConfig = {
  apiKey: env.VITE_FIREBASE_APIKEY,
  authDomain: env.VITE_FIRABASE_AUTHDOMAIN,
  projectId: env.VITE_FIREBASE_PROJECTID,
  storageBucket: env.VITE_FIREBASE_STORAGEBUCKET,
  messagingSenderId: env.VITE_FIREBASE_MESSAGEID,
  appId: env.VITE_FIREBASE_APPID,
};
// firebase.initializeApp(app);
// Initialize Firebase
// export const auth = firebaseConfig.auth();
const app = initializeApp(firebaseConfig);

const emailPassLogin = async (email, password, callback) => {
  try {
    const { user } = await signInWithEmailAndPassword(
      getAuth(),
      email,
      password
    );
    callback(null, user);
  } catch (err) {
    callback(err, null);
  }
};
const registerUser = async (email, password, callback) => {
  try {
    const { user } = await createUserWithEmailAndPassword(
      getAuth(),
      email,
      password
    );
    callback(null, user);
  } catch (err) {
    callback(err, null);
  }
};
const auth = getAuth(app);
export { app, emailPassLogin, registerUser, auth };
