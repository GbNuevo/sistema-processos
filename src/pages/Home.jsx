
import React from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function Home() {
  const auth = getAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/');
  };

  return (
    <div style={{ padding: 30 }}>
      <h2>Bem-vindo!</h2>
      <button onClick={handleLogout}>Sair</button>
    </div>
  );
}

export default Home;
