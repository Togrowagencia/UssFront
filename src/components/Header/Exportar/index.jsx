import React from "react";

const Exportar = ({ onClick }) => {
  return (
    <div className="flex items-center justify-end">
      <button
        className={`bg-verde rounded-[5px] flex items-center justify-center gap-[3%] cursor-pointer w-[13vh] h-[4vh]`}
        onClick={onClick}
      >
        <img src="/svg/exportar.svg" alt="exportar" />
        <p className="textos blanco">Exportar</p>
      </button>
    </div>
  );
};

export default Exportar;
