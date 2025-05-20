import React from "react";

const CrearUsuario = ({ onClick }) => {
  return (
    <div className="flex items-center justify-end">
      <button
        className={`bg-mostaza-suave rounded-[5px] flex items-center justify-center gap-[3%] cursor-pointer w-[16vh] h-[4vh]`}
        onClick={onClick}
      >
        <p className="textos blanco">Agregar Nuevo</p>
        <img src="/svg/drawers/mas.svg" alt="agregar" />
      </button>
    </div>
  );
};

export default CrearUsuario;
