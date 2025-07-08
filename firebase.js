
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQj6zIgOBrQQR5-DtIapR_M8Tkh1C415w",
  authDomain: "sky-it-bpm.firebaseapp.com",
  projectId: "sky-it-bpm",
  storageBucket: "sky-it-bpm.appspot.com",
  messagingSenderId: "180797829582",
  appId: "1:180797829582:web:a76518bf3da3001bf33b9f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
