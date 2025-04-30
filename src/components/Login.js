import React, { useState } from 'react';
import axios from 'axios';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const authLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8001/api/auth/login', {
        email,
        password
      });

      const { token, user } = response.data;
      localStorage.setItem('token', token);
      onLogin(user); 
    } catch (err) {
      alert('Credenciales inválidas');
    }
  };

  return (
    <div>
      <h2>Iniciar sesión</h2>
      <form onSubmit={authLogin}>
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
}

export default Login;
