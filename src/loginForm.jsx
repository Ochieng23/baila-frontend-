import React, { useState } from "react";
import "./LoginForm.css";

const LoginForm = ({ handleSignup }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleLogin = async () => {
    try {
      const response = await fetch("https://baila-backend.onrender.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (response.ok) {
        const user = await response.json();
        // do something with the user data, e.g. store it in state
        window.location.href = "/"; // redirect to home page
      } else {
        // handle error case
        const errorData = await response.json();
        setErrors(errorData.errors || ["An unknown error occurred."]);
      }
    } catch (err) {
      console.error("Error during login:", err);
      setErrors(["An unknown error occurred."]);
    }
  };

  const handleClose = () => {
    window.location.href = "/home";
  };

  return (
    <div className="overlay">
      <div className="login-form-container">
        <div className="login-form-overlay">
          <div className="login-form-container">
            <div className="login-form-header">
              <h2>Log in</h2>
              <button onClick={handleClose}>X</button>
            </div>

            <div className="login-form-body">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button onClick={handleLogin}>Log in</button>

              <div className="signup-link-container">
                <p>Don't have an account?</p>
                <button onClick={handleSignup}>Sign up</button>
                {errors.length > 0 && (
                  <ul style={{ color: "red" }}>
                    {errors.map((error, i) => (
                      <p key={i}>{error}</p>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
