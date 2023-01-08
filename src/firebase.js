// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeIJUYSoi5Xj7QieLylh_ETB8DvWR_Pb0",
  authDomain: "ownmenu-8ee2b.firebaseapp.com",
  projectId: "ownmenu-8ee2b",
  storageBucket: "ownmenu-8ee2b.appspot.com",
  messagingSenderId: "835421012060",
  appId: "1:835421012060:web:ab7a92b0ff03ebc1b26699"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)