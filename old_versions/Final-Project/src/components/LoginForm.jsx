import React, { useState } from 'react';
import styled from 'styled-components';

const LoginForm = ({ onSuccess, switchToSignup }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { email, password };
    console.log("Login submitted:", user);
    if (onSuccess) onSuccess(user);
  };

  return (
    <StyledWrapper>
      <form onSubmit={handleSubmit} className="login-form">
        <h1 className="login-title">Login</h1>

        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <div className="checkbox-row">
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">Remember me</label>
        </div>

        <button type="submit" className="button-submit">Se connecter</button>

        <p className="signup-link">
          Don’t have an account?{' '}
          <span onClick={switchToSignup}>Sign up</span>
        </p>
      </form>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .login-form {
    background-color: rgba(255, 255, 255, 0.8);
    padding: 2rem;
    border-radius: 15px;
    width: 100%;
    max-width: 400px;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .login-title {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #555;
  }

  input[type="email"],
  input[type="password"] {
    padding: 10px;
    border-radius: 8px;
    border: 1px solid #ccc;
    width: 100%;
  }

  .checkbox-row {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.9rem;
  }

  .button {
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: #1a1a1a;
    cursor: pointer;
    transition: border-color 0.25s;
  }
  .button:hover {
    border-color: #646cff;s
  }
  .button:focus,
  .button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
  }

  .signup-link {
    text-align: center;
    font-size: 0.9rem;
    margin-top: 1rem;
  }

  .signup-link span {
    color: blue;
    cursor: pointer;
    font-weight: bold;
  }
`;

export default LoginForm;
