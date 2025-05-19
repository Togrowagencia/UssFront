import React from "react";
import adversosData from "./Data/Data";
import "../styles/styles.css";

const Adversos = () => {
  return (
    <div className="w-full max-h-[30vh] overflow-y-auto custom-scroll">
      <table className="w-full border-collapse ">
        <thead>
          <tr>
            <th className="textos-bold gris text-left px-[3%] pb-[1.6%]">Candidato</th>
            <th className="textos-bold gris text-left px-[3%] pb-[1.6%]">Cedula</th>
            <th className="textos-bold gris text-left px-[3%] pb-[1.6%]">Estado</th>
            <th className="textos-bold gris text-left px-[3%] pb-[1.6%]">Empresa</th>
            <th className="textos-bold gris text-left px-[3%] pb-[1.6%]">Fecha</th>
          </tr>
        </thead>
        <tbody>
          {adversosData.map((adversos, idx) => (
            <tr
              key={idx}
              className={idx % 2 === 0 ? "bg-gris-platino" : ""}
            >
              <td className="py-[1.6%] px-[1.13vw] textos-peques rounded-l-[5px]">{adversos.candidato}</td>
              <td className="py-[1.6%] px-[1.13vw] textos-peques">{adversos.cedula}</td>
              <td className="py-[1.6%] px-[1.13vw] textos-peques">{adversos.estado}</td>
              <td className="py-[1.6%] px-[1.13vw] textos-peques">{adversos.empresa}</td>
              <td className="py-[1.6%] px-[1.13vw] textos-peques rounded-r-[5px]">{adversos.fecha}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Adversos;