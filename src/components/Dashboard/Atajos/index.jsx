import React from "react";
import { useNavigate } from "react-router-dom";
import PoligrafiaEspecifico from "./PoligrafiaEspecifico";
import Adversos from "./Adversos";
import PoligrafiaRutina from "./PoligrafiaRutina";
import PoligrafiaAdjuntos from "./PoligrafiaAdjuntos";
import EstudiosSeguridad from "./EstudiosSeguridad";
import Empresas from "./Empresas";
import PoligrafiaPreempleo from "./PolografiaPreempleo";

const Atajos = () => {

  {/* rol poligrafia gap-x-[5.2%] rol admin gap-x-[2.8%]*/}

  return (
    <div className="flex flex-wrap h-[42vh] rounded-[10px] gap-x-[5.2%] gap-y-[4.5%]">

      {/* rol poligrafia */}
      <PoligrafiaEspecifico />

      <Adversos />

      {/* rol poligrafia */}
      <PoligrafiaRutina />

      {/* rol poligrafia */}
      <PoligrafiaAdjuntos />
      
      <EstudiosSeguridad />
      <Empresas />

      {/* rol poligrafia */}
      <PoligrafiaPreempleo />
    </div>
  );
};

export default Atajos;
