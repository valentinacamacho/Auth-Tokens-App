import React,{ useState,useEffect, use } from "react";
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard";

function App() {
  const [autenticado, setAutenticado] = useState(false);

  useEffect(()=>{
    const token = localStorage.getItem("token");
    if(token){
      setAutenticado(true);
    }
  })
  return (
    <div className="App">
      {autenticado ? <Dashboard/> : <Login/>}
    </div>
  );
}

export default App;
