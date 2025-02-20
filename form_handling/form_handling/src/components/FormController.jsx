import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

const FormController = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [userCredentials, setUserCredentials] = useState(null);
  const [userData, setUserData] = useState(null);

  const handleFormSubmit = (data) => {
    if (isLogin) {
      setUserData(data);
    } else {
      setUserCredentials({ email: data.email, password: data.password });
      setIsLogin(true);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        {userData ? (
          <h2 style={styles.welcomeText}>Welcome, {userData.email}!</h2>
        ) : isLogin ? (
          <LoginForm onSubmit={handleFormSubmit} credentials={userCredentials} />
        ) : (
          <SignupForm onSubmit={handleFormSubmit} />
        )}
        <button
          style={styles.toggleButton}
          onClick={() => setIsLogin(!isLogin)}
          onMouseOver={(e) => (e.target.style.background = "#5a3e9d")}
          onMouseOut={(e) => (e.target.style.background = "#764ba2")}
        >
          {isLogin ? "Don't have an account? Signup" : "Already have an account? Login"}
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100%",
    background: "white",
  },
  card: {
    background: "#fff",
    padding: "40px",
    borderRadius: "12px",
    boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
    width: "450px",
    minWidth: "400px",
    textAlign: "center",
    transition: "all 0.3s ease",
  },
  welcomeText: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#333",
  },
  toggleButton: {
    marginTop: "20px",
    padding: "14px 24px",
    borderRadius: "8px",
    border: "none",
    background: "#764ba2",
    color: "white",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "background 0.3s ease",
  },
};

export default FormController;

