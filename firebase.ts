import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA3qB1Np0A8ab6gMie6uw-pCe8wWALU3dg",
  authDomain: "chatgpt-messenger-618cc.firebaseapp.com",
  databaseURL:
    "https://chatgpt-messenger-618cc-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "chatgpt-messenger-618cc",
  storageBucket: "chatgpt-messenger-618cc.appspot.com",
  messagingSenderId: "256419580334",
  appId: "1:256419580334:web:4694c9775256f48a47a03f",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
