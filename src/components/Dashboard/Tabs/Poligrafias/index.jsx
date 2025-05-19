import React from "react";
import poligrafiasData from "./Data/Data";
import "../styles/styles.css";

const Poligrafias = () => {
  return (
    <div className="w-full max-h-[30vh] overflow-y-auto custom-scroll">
      <table className="w-full border-collapse ">
        <thead>
          <tr>
            <th className="textos-bold gris text-left px-[6%] pb-[1.6%]">Fecha</th>
            <th className="textos-bold gris text-left px-[6%] pb-[1.6%]">Tipo</th>
            <th className="textos-bold gris text-left px-[6%] pb-[1.6%]">Nombre</th>
            <th className="textos-bold gris text-left px-[6%] pb-[1.6%]">Empresa</th>
          </tr>
        </thead>
        <tbody>
          {poligrafiasData.map((poligrafias, idx) => (
            <tr
              key={idx}
              className={idx % 2 === 0 ? "bg-gris-platino" : ""}
            >
              <td className="py-[1.6%] px-[2.22vw] textos-peques rounded-l-[5px]">{poligrafias.fecha}</td>
              <td className="py-[1.6%] px-[2.22vw] textos-peques">{poligrafias.tipo}</td>
              <td className="py-[1.6%] px-[2.22vw] textos-peques">{poligrafias.nombre}</td>
              <td className="py-[1.6%] px-[2.22vw] textos-peques rounded-r-[5px]">{poligrafias.empresa}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Poligrafias;