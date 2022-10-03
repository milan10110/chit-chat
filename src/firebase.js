import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBSAmajtoo5ojBFH-yZMmNLyM9zyj02bJI",
  authDomain: "chit-chat-65c01.firebaseapp.com",
  projectId: "chit-chat-65c01",
  storageBucket: "chit-chat-65c01.appspot.com",
  messagingSenderId: "1034878235950",
  appId: "1:1034878235950:web:4352375da0bc7bebb376bf",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
