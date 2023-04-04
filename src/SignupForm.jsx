import React, { useState } from "react";
import "./SignupForm.css";

const SignupForm = ({ handleClose }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSignup = async () => {
    const response = await fetch("https://baila-backend.onrender.com/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      const user = await response.json();
      window.location.href = "/account";
    } else {
      const errorText = await response.text();
      console.log(errorText);
      // handle error case
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
              name="username"
              value={formData.username}
              onChange={handleChange}
            />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
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
