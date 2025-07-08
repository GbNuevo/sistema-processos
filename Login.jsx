import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import "./Login.css";
import { app } from "./firebaseConfig";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const auth = getAuth(app);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setError("");
      alert("Login realizado com sucesso!");
    } catch (err) {
      setError("Erro ao fazer login. Verifique as credenciais.");
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>
          Bem-vindo à <strong>Sky IT BPM</strong>
        </h2>
        <p>Faça login para acessar o sistema</p>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Entrar</button>
        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
};

export default Login;