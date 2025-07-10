
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const logout = async () => {
    await signOut(auth);
    navigate("/");
  };
  return (
    <div style={{ color: "#fff", textAlign: "center" }}>
      <h1>Você está logado!</h1>
      <button onClick={logout} style={{
        padding: "10px 20px", borderRadius: 5, border: "none",
        cursor: "pointer"
      }}>Sair</button>
    </div>
  );
};

export default Home;
