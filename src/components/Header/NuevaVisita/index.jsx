import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const NuevaVisita = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isNuevaVisita = location.pathname === "/gestion-visitas/nueva";

  return (
    <>
      {isNuevaVisita ? (
        <div className="flex items-center justify-between w-full mx-[1%]">
          <h3 className="mostaza-suave">Nueva Visita Domiciliaria</h3>
          <button className="bg-gris rounded-[5px] flex items-center justify-center gap-[5%] cursor-pointer w-[16vh] h-[4vh]">
            <img src="/svg/header/pdf.svg" />
            <p className="textos blanco">Generar PDF</p>
          </button>
        </div>
      ) : (
        <div className="flex items-center justify-end w-full mx-[1%]">
          <button
            className="bg-mostaza-suave rounded-[5px] flex items-center justify-center gap-[3%] cursor-pointer w-[22vh] h-[4vh]"
            onClick={() => navigate("/gestion-visitas/nueva")}
          >
            <p className="textos blanco">Crear Visita Domiciliaria</p>
            <img src="/svg/drawers/mas.svg" />
          </button>
        </div>
      )}
    </>
  );
};

export default NuevaVisita;
