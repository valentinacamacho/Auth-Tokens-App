import React, { useState } from "react";

function Login() {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');

  const authLogin = (e) => {
    e.preventDefault();
    console.log("usuario:", usuario, "password:", password)

  }
  return (
    <div className="">
      <h2>Iniciar sesión</h2>
      <form onSubmit={authLogin}>
        <input
          type="text"
          placeholder="Usuario"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
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
  )
}

export default Login;