import React, { useState } from "react";
import "./SignupForm.css";

const SignupForm = ({ handleClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    const response = await fetch("https://baila-backend.onrender.com/signup", {
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
      window.location.href = "/account";
    } else {
      const responseText = await response.text();
      console.log(responseText);
      // handle error case
    }
  };
  

  return (
    <div className="overlay">
      <div className="signup-form-container">
        <div className="signup-form-overlay">
          <div className="signup-form">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />

            <label htmlFor="password">Password:</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />

            <button onClick={handleSignup}>Sign up</button>
            <p>
              Already have an account? <a href="#" onClick={handleClose}>Log in</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
