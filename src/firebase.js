import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyArYrxruSv3SNb-Fb0bshmZCJ-9Twt4dsw",
  authDomain: "chatgram-a8a96.firebaseapp.com",
  projectId: "chatgram-a8a96",
  storageBucket: "chatgram-a8a96.appspot.com",
  messagingSenderId: "520721272383",
  appId: "1:520721272383:web:eb28896a50d942538bf28a",
  measurementId: "G-53290G64TD"
  /*
  apiKey: "AIzaSyAzDRcsigI14LhK8PuJeoA5Zp4ea1NVLLk",
  authDomain: "chat-app-76bc7.firebaseapp.com",
  projectId: "chat-app-76bc7",
  storageBucket: "chat-app-76bc7.appspot.com",
  messagingSenderId: "680296087485",
  appId: "1:680296087485:web:6e08abea9dbcab6b2b1cd4",
  measurementId: "G-MFV9NF9H41"
  */
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
