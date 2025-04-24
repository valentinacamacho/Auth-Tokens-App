import React from "react";

function Dashboard({onLogout}) {
    const cerrarSesion = () => {
      localStorage.removeItem("token");
      onLogout();
  }

  return (
    <div>
      <h2>Bienvenida</h2>
      <p>Has iniciado sesión correctamente</p>
      <button onClick={cerrarSesion}>Cerrar sesión</button>
    </div>
  )
}

export default Dashboard;