import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const NuevaPoligrafia = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = () => {
    navigate(location.pathname + "/nueva");
  };

  return (
    <div className="flex items-center justify-end">
      <button
        className="bg-mostaza-suave rounded-[5px] flex items-center justify-center gap-[3%] cursor-pointer w-[16vh] h-[4vh]"
        onClick={handleNavigate}
      >
        <p className="textos blanco">Agregar Nuevo</p>
        <img src="/svg/drawers/mas.svg" />
      </button>
    </div>
  );
};

export default NuevaPoligrafia;
