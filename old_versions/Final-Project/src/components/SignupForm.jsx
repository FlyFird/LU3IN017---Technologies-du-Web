import React, { useState } from 'react';
import styled from 'styled-components';

const SignupForm = ({ onSuccess, switchToLogin }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Les mots de passe ne correspondent pas !');
      return;
    }
    console.log("Inscription réussie :", formData);
    if (onSuccess) onSuccess();
  };

  return (
    <StyledWrapper>
      <form className="form" onSubmit={handleSubmit}>
        <h1 className="signup-title">Sign Up</h1>

        <label htmlFor="name">Nom</label>
        <input
          id="name"
          type="text"
          className="input"
          placeholder="Entrer votre nom"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          className="input"
          placeholder="Entrer votre email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Mot de passe</label>
        <input
          id="password"
          type="password"
          className="input"
          placeholder="Mot de passe"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <label htmlFor="confirmPassword">Confirmer le mot de passe</label>
        <input
          id="confirmPassword"
          type="password"
          className="input"
          placeholder="Confirmez votre mot de passe"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />

        <button type="submit" className="button-submit">S'inscrire</button>

        <p className="login-link">
          Already have an account?{' '}
          <span onClick={switchToLogin}>Login</span>
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

  .form {
    background-color: rgba(255, 255, 255, 0.8);
    padding: 2rem;
    border-radius: 15px;
    width: 500px;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .signup-title {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #555;
  }

  .input {
    padding: 10px;
    border-radius: 8px;
    border: 1px solid #ccc;
    width: 100%;
  }

  .button-submit {
    width: 100%;
    padding: 10px;
    background: black;
    color: white;
    border: none;
    border-radius: 8px;
    font-weight: 600;
  }

  .login-link {
    text-align: center;
    font-size: 0.9rem;
    margin-top: 1rem;
  }

  .login-link span {
    color: blue;
    cursor: pointer;
    font-weight: bold;
  }
`;

export default SignupForm;
