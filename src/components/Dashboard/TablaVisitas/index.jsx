import React from "react";
import { dataPoligrafia } from "./Data/Data";

const Tabla = () => {

  return (
    <div className="w-full flex flex-col justify-center items-center my-[1.7%]">
      <table className=" w-full border-collapse ">
        <thead className="text-left ">
          <tr className="">
            <th className="px-[1%]">Fecha</th>
            <th className="px-[1%]">Nombre</th>
            <th className="px-[1%]">Cedula</th>
            <th className="px-[1%]">Ciudad</th>
            <th className="px-[1%]">Empresa</th>
          </tr>
        </thead>
        <tbody>
          {dataPoligrafia.map((poligrafia, index) => (
            <tr
              key={poligrafia.id}
              className={index % 2 === 0 ? "bg-blanco-suave " : ""}
            >
              <td
                className={
                  index % 2 === 0
                    ? "textos gris px-[1%] py-[0.6%] rounded-l-[10px]"
                    : "textos gris px-[1%] py-[0.8%] rounded-l-[10px]"
                }
              >
                {poligrafia.fecha}
              </td>
              <td
                className={
                  index % 2 === 0
                    ? "textos gris px-[1%]"
                    : "textos gris px-[1%] py-[0.7%]"
                }
              >
                {poligrafia.nombre}
              </td>
              <td
                className={
                  index % 2 === 0
                    ? "textos gris px-[1%]"
                    : "textos gris px-[1%] py-[0.7%]"
                }
              >
                {poligrafia.cedula}
              </td>
              <td
                className={
                  index % 2 === 0
                    ? "textos gris px-[1%]"
                    : "textos gris px-[1%] py-[0.7%]"
                }
              >
                {poligrafia.ciudad}
              </td>
              <td
                className={
                  index % 2 === 0
                    ? "textos gris px-[1%] rounded-r-[10px]"
                    : "textos gris px-[1%] py-[0.7%] rounded-r-[10px]"
                }
              >
                {poligrafia.empresa}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tabla;