import React from "react";
import { useNavigate } from "react-router-dom";

const NuevoEstudio = () => {
  const navigate = useNavigate();
  return ( 
    <div className="flex items-center justify-end">
      <button
        className="bg-mostaza-suave rounded-[5px] flex items-center justify-center gap-[3%] cursor-pointer w-[22vh] h-[4vh]"
        onClick={() => navigate("/estudios-seguridad/nuevo")}
      >
        <p className="textos blanco">Agregar Nuevo Estudio</p>
        <img src="/svg/drawers/mas.svg" />
      </button>
    </div>
  );
};

export default NuevoEstudio;
