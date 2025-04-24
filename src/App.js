import React, { useState, useEffect, use } from "react";
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard";

function App() {
  const [autenticado, setAutenticado] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setAutenticado(true);
    }
  }, []);

  const manejarLogin = () => {
    setAutenticado(true);
  };

  const manejarLogout = () => {
    setAutenticado(false);
  };

  return (
    <div className="App">
      {autenticado ? (
        <Dashboard  onLogout={manejarLogin}/>
       ) : ( 
       <Login onLogout={manejarLogout}/>
      ) }
    </div>
  );
}

export default App;
