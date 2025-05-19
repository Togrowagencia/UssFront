import React from "react";
import estudiosData from "./Data/Data";
import "../styles/styles.css";

const Estudios = () => {
  return (
    <div className="w-full max-h-[30vh] overflow-y-auto custom-scroll">
      <table className="w-full border-collapse ">
        <thead>
          <tr>
            <th className="textos-bold gris text-left px-[3%] pb-[1.6%]">Nombre</th>
            <th className="textos-bold gris text-left px-[3%] pb-[1.6%]">Cedula</th>
            <th className="textos-bold gris text-left px-[3%] pb-[1.6%]">Cargo</th>
            <th className="textos-bold gris text-left px-[3%] pb-[1.6%]">Empresa</th>
            <th className="textos-bold gris text-left px-[3%] pb-[1.6%]">Fecha</th>
          </tr>
        </thead>
        <tbody>
          {estudiosData.map((estudios, idx) => (
            <tr
              key={idx}
              className={idx % 2 === 0 ? "bg-gris-platino" : ""}
            >
              <td className="py-[1.6%] px-[1.13vw] textos-peques rounded-l-[5px]">{estudios.nombre}</td>
              <td className="py-[1.6%] px-[1.13vw] textos-peques">{estudios.cedula}</td>
              <td className="py-[1.6%] px-[1.13vw] textos-peques">{estudios.cargo}</td>
              <td className="py-[1.6%] px-[1.13vw] textos-peques">{estudios.empresa}</td>
              <td className="py-[1.6%] px-[1.13vw] textos-peques rounded-r-[5px]">{estudios.fecha}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Estudios;