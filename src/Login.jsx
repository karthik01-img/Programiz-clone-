import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react"; // make sure lucide-react is installed

function Login() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    const validUser = "kkorukonda1@gmail.com";
    const validPass = "Karthik@2004";

    if (user === validUser && pass === validPass) {
      alert("✅ Login successful! Welcome Karthik!");
      navigate("/"); // redirect to home after login
    } else {
      alert("❌ Invalid username or password!");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">Login to Programiz Pro</h1>
        <p className="login-subtitle">Continue your learning journey</p>

        <input
          type="text"
          placeholder="Email or Username"
          className="login-input"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />

        <div className="password-field">
          <input
            type={showPass ? "text" : "password"}
            placeholder="Password"
            className="login-input password-input"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
          <span
            className="toggle-icon"
            onClick={() => setShowPass(!showPass)}
            title={showPass ? "Hide password" : "Show password"}
          >
            {showPass ? <EyeOff size={20} /> : <Eye size={20} />}
          </span>
        </div>

        <button className="login-btn" onClick={handleLogin}>
          Login
        </button>

        <p className="login-footer">
          Don’t have an account?{" "}
          <span onClick={() => navigate("/")} className="signup-link">
            Go back
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
