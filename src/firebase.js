
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB_iYkAwg7aezQuGs4o1vO276NZPvkh3KM",
  authDomain: "sistema-skyit.firebaseapp.com",
  projectId: "sistema-skyit",
  storageBucket: "sistema-skyit.firebasestorage.app",
  messagingSenderId: "470578924030",
  appId: "1:470578924030:web:36f0d087773fd4c90e98af"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
