import React from "react";
import { useNavigate } from "react-router-dom";

const EstudiosSeguridad = () => {
  const navigate = useNavigate();

  return (
    <div className="flex w-[47.4%] h-[21.5%] bg-blanco-suave rounded-[10px] items-center">
      <div className="flex px-[8%]">
        <h2 className="gris">9</h2>
      </div>
      <div className="flex flex-col">
        <h4 className="gris flex items-center">Estudios de Seguridad</h4>
        <p className="textos-peques2 gris flex items-center mt-[1%]">
          Ultima actualización: 19/03/2025
        </p>
      </div>
      <div
        className="flex items-center mx-[2%] justify-end"
        onClick={() => navigate("/estudios-seguridad")}
      >
        <img src="/svg/dashboard/flechaN.svg" alt="" className="" />
      </div>
    </div>
  );
};

export default EstudiosSeguridad;
