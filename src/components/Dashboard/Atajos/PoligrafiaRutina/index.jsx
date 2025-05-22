import React from "react";
import { useNavigate } from "react-router-dom";

const PoligrafiaRutina = () => {
  const navigate = useNavigate();

  {/* rol poligrafia w-[22.9%] rol admin w-[47.4%]*/}

  return (
    <div className="flex w-[47.4%] h-[21.5%] bg-azul rounded-[10px] items-center">
      <div className="flex px-[8%]">
        <h2 className="blanco">2</h2>
      </div>
      <div className="flex flex-col">
        <h4 className="blanco flex items-center w-[90%]">
          Poligrafía Examen de Rutina
        </h4>
        <p className="textos-peques2 blanco flex items-center mt-[1%]">
          Ultima actualización: 19/03/2025
        </p>
      </div>
      <div
        className="flex items-center mx-[2%]"
        onClick={() => navigate("/poligrafia/rutina")}
      >
        <img src="/svg/dashboard/flechaN.svg" alt="" className="" />
      </div>
    </div>
  );
};

export default PoligrafiaRutina;
