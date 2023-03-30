import React, { useState } from "react";
import LoginForm from "./loginForm";
import SignupForm from "./SignupForm";

const App = () => {
  const [showLogin, setShowLogin] = useState(true);

  const handleLogin = () => {
    setShowLogin(true);
  };

  const handleSignup = () => {
    setShowLogin(false);
  };

  return (
    <div>
      {showLogin ? (
        <LoginForm handleClose={handleLogin} handleSignup={handleSignup} />
      ) : (
        <SignupForm handleClose={handleLogin} />
      )}
    </div>
  );
};

export default App;
