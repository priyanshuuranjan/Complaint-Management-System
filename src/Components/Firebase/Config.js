import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAXM3g_jSCfFH56MCCwyNpwQa6u19FUvO0",
  authDomain: "alpha-cms-524ce.firebaseapp.com",
  projectId: "alpha-cms-524ce",
  storageBucket: "alpha-cms-524ce.appspot.com",
  messagingSenderId: "735554409625",
  appId: "1:735554409625:web:7bdd8f325bc66bb7f5d408",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(); 
const firestoreDb = getFirestore(firebaseApp)

export { firebaseApp, auth, firestoreDb };
