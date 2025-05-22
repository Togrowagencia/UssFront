import React from "react";
import { useNavigate } from "react-router-dom";

const TablaVisitador = () => {
  const navigate = useNavigate();

  return (
    <div className="flex w-[49.6%] h-[8.5vh] bg-blanco-suave rounded-[10px] items-center">
      <div className="flex w-full">
        <h3 className="gris flex items-center mx-[4%]">Ver Tabla completa</h3>
      </div>
      <div
        className="flex items-center justify-end mx-[1%]"
        onClick={() => navigate("/gestion-visitas")}
      >
        <img src="/svg/dashboard/flechaN.svg" alt="" className="" />
      </div>
    </div>
  );
};

export default TablaVisitador;
