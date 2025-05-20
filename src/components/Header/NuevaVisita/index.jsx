import React from "react";
import { useNavigate } from "react-router-dom";

const NuevaVisita = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-end w-full mx-[1%]">
      <button
        className="bg-mostaza-suave rounded-[5px] px-[1%] py-[0.7%] flex items-center gap-[3%] w-[17%] cursor-pointer"
        onClick={() => navigate("/gestion-visitas/nueva")}
      >
        <p className="textos blanco">Crear Visita Domiciliaria</p>
        <img src="/svg/drawers/mas.svg" />
      </button>
    </div>
  );
};

export default NuevaVisita;
