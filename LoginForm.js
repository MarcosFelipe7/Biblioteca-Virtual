import React, { useState } from 'react';

const LoginForm = ({ onLogin }) => {
  const [name, setName] = useState(''); 

  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin(name);  
  };

  return (
    <div className="login-form">
      <h2>Entrar</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Digite seu nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default LoginForm;
