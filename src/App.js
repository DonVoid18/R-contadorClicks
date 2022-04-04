import "./App.css";
import Logo from "./Imagenes/logo_proyect.png";
import Boton from "./Componentes/Boton/Boton";
import Contador from "./Componentes/Contador/Contador";
import React, {useState} from "react";
function App() {
  
  const [count, setCount] = useState(0);

  const contadorClic = () =>{
    setCount(count + 1);
  }
  const reiniciarContador = () =>{
    setCount(0);
  }
  return (
    <div className="App">
      <div className="container_titulo">
        <h1>Contador de clics</h1>
      </div>
      <div className="container_logo">
        <img src={Logo} alt="Logo del proyecto" title="Logo" />
      </div>
      <Contador valor={count}></Contador>
      <div className="container_botones">
        <Boton texto="Clic" tipo={true} actividad={contadorClic}></Boton>
        <Boton texto="Reiniciar" tipo={false} actividad={reiniciarContador}></Boton>
      </div>
    </div>
  );
}

export default App;
