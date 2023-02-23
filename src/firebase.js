import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: 'AIzaSyAeIJUYSoi5Xj7QieLylh_ETB8DvWR_Pb0',
  authDomain: 'ownmenu-8ee2b.firebaseapp.com',
  projectId: 'ownmenu-8ee2b',
  storageBucket: 'ownmenu-8ee2b.appspot.com',
  messagingSenderId: '835421012060',
  appId: '1:835421012060:web:ab7a92b0ff03ebc1b26699',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
//const firestore = getFirestore(app);
