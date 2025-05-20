import React from "react";

const CrearEmpresa = ({ onClick }) => {
  return (
    <div className="flex items-center justify-end w-full mx-[1%]">
      <button className="bg-mostaza-suave rounded-[5px] px-[1%] py-[0.7%] flex items-center gap-[3%] w-[11.4%] cursor-pointer" onClick={onClick}>
        <p className="textos blanco">Crear Empresa</p>
        <img src="/svg/drawers/mas.svg" alt="agregar" />
      </button>
    </div>
  );
};

export default CrearEmpresa;