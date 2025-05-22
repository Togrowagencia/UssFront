import React from "react";
import { useNavigate } from "react-router-dom";

const NuevaVisita = () => {
  const navigate = useNavigate();

  return (
    <div className="flex w-[49.6%] h-[8.5vh] bg-azul rounded-[10px] items-center">
      <div className="flex flex-col w-full">
        <h3 className="blanco flex items-center mx-[4%] mb-[0.5%]">Nueva Visita Domiciliaria</h3>
        <p className="textos-peques2 blanco flex items-center mx-[4%]">
          Ultima actualización: 19/03/2025
        </p>
      </div>
      <div
        className="flex items-center justify-end mx-[1%]"
        onClick={() => navigate("/gestion-visitas/nueva")}
      >
        <img src="/svg/dashboard/flechaN.svg" alt="" className="" />
      </div>
    </div>
  );
};

export default NuevaVisita;
