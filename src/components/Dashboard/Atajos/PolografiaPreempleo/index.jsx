import React from "react";
import { useNavigate } from "react-router-dom";

const PoligrafiaPreempleo = () => {
  const navigate = useNavigate();

  {/* rol poligrafia w-[22.9%] rol admin w-full*/}

  return (
    <div className="flex w-full h-[21.5%] bg-azul rounded-[10px] items-center">
      <div className="flex pl-[4.2%] pr-[2%]">
        <h2 className="blanco">10</h2>
      </div>
      <div className="flex w-full">
        <h4 className="blanco flex items-center">
          Poligrafía Examen Preempleo
        </h4>
        <p className="textos-peques2 blanco flex items-center mx-[4%]">
          Ultima actualización: 19/03/2025
        </p>
      </div>
      <div
        className="flex items-center justify-end mx-[1%]"
        onClick={() => navigate("/poligrafia/preempleo")}
      >
        <img src="/svg/dashboard/flechaN.svg" alt="" className="" />
      </div>
    </div>
  );
};

export default PoligrafiaPreempleo;
