
// Importa as funções do Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Sua configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBQj6zIgOBrQQR5-DtIapR_M8Tkh1C415w",
  authDomain: "sky-it-bpm.firebaseapp.com",
  projectId: "sky-it-bpm",
  storageBucket: "sky-it-bpm.firebasestorage.app",
  messagingSenderId: "180797829582",
  appId: "1:180797829582:web:a76518bf3da3001bf33b9f"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Captura o botão de login e adiciona o evento
document.getElementById("login-btn").addEventListener("click", async function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  try {
    await signInWithEmailAndPassword(auth, email, senha);
    alert("Login realizado com sucesso!");
    window.location.href = "dashboard_skytech.html";
  } catch (error) {
    alert("Erro no login: " + error.message);
  }
});
