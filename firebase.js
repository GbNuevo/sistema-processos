// Importação das funções do Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBQj6zIgOBrQQR5-DtIapR_M8Tkh1C415w",
  authDomain: "sky-it-bpm.firebaseapp.com",
  projectId: "sky-it-bpm",
  storageBucket: "sky-it-bpm.firebasestorage.app",
  messagingSenderId: "180797829582",
  appId: "1:180797829582:web:a76518bf3da3001bf33b9f"
};

// Inicialização
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { auth, signInWithEmailAndPassword };