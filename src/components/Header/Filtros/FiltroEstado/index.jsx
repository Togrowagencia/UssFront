import React from "react";

const FiltroEstado = () => {
  return (
    <div className="flex items-center border-b border-[#C1C1C1] w-[19%]">
      <div className="flex items-center gap-[2%] mb-[2.5%] px-[5.5%]">
        <img src="/svg/filtros/filtro.svg" alt="" />
        <input type="text" placeholder="Filtrar por estado" className="h4 gris" />
      </div>
    </div>
  );
};

export default FiltroEstado;