import React, { useState } from "react";
import "./SignupForm.css";

const SignupForm = ({ handleClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    const response = await fetch("http://localhost:3000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    if (response.ok) {
      const user = await response.json();
      // redirect to login page on successful signup
      window.location.href = "/account";
    } else {
      // handle error case
      const error = await response.json();
      console.log(error);
    }
  };

  return (
    <div className="overlay">
      <div className="signup-form-container">
        <div className="signup-form-overlay">
          <div className="signup-form">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

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

            <button onClick={handleSignup}>Sign up</button>
            <p>
              Already have an account?{" "}
              <a href="#" onClick={handleClose}>
                Log in
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
