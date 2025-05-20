import React from "react";
import { useNavigate } from "react-router-dom";

const NuevaVisita = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-end w-full mx-[1%]">
      <button
        className="bg-mostaza-suave rounded-[5px] flex items-center justify-center gap-[3%] cursor-pointer w-[22vh] h-[4vh]"
        onClick={() => navigate("/gestion-visitas/nueva")}
      >
        <p className="textos blanco">Crear Visita Domiciliaria</p>
        <img src="/svg/drawers/mas.svg" />
      </button>
    </div>
  );
};

export default NuevaVisita;
