import React from "react";

const FiltroNombre = () => {
  return (
    <div className="flex items-center border-b border-[#C1C1C1] w-[69%]">
      <div className="flex items-center gap-[2%] mb-[2.5%] px-[5.5%]">
        <img src="/svg/filtros/filtro.svg" alt="" />
        <input type="text" placeholder="Filtrar por nombre" className="h4 gris w-[100%]" />
      </div>
    </div>
  );
};

export default FiltroNombre;