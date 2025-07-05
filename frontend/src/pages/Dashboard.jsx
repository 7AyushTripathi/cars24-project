// src/pages/Dashboard.jsx

import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Dashboard() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!user) navigate("/login");
  }, [user, navigate]);

  return (
    <div style={styles.container}>
      <h1>Welcome, {user?.sub || "User"} 👋</h1>
      <p>This is your dashboard. You can manage your cars here.</p>

      <div style={styles.card}>
        <h3>Your Cars</h3>
        <p>[Coming soon...]</p>
      </div>

      <button onClick={logout} style={styles.logoutBtn}>Logout</button>
    </div>
  );
}

const styles = {
  container: {
    padding: "2rem",
    fontFamily: "Arial",
    textAlign: "center",
  },
  card: {
    margin: "2rem auto",
    padding: "1rem",
    border: "1px solid #ccc",
    borderRadius: "10px",
    maxWidth: "500px"
  },
  logoutBtn: {
    marginTop: "2rem",
    padding: "0.7rem 1.2rem",
    backgroundColor: "#dc3545",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  }
};
