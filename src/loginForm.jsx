import React, { useState } from "react";
import "./LoginForm.css";

const LoginForm = ({  handleSignup }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const response = await fetch("http://localhost:3000/login", {
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
      const error = await response.json();
      console.log(error);
    }
  };

  const handleClose = () =>{
    window.location.href = "/"
  }

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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
