import React from "react";
// recordar: componentes basado en clases y los componentes funcionales
function Boton({tipo, actividad, texto}){
    return(
        <button className={tipo ? "boton_clic" : "boton_reiniciar"} onClick={actividad}>
            {texto}
        </button>
        );
}
export default Boton;
