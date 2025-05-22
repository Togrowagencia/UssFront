import React from "react";
import { dataPoligrafia } from "./Data/Data";

const Tabla = () => {

  return (
    <div className="w-full flex flex-col justify-center items-center my-[1.7%]">
      <table className=" w-full border-collapse ">
        <thead className="text-left ">
          <tr className="">
            <th className="px-[1%]">Foto</th>
            <th className="px-[1%]">Fecha</th>
            <th className="px-[1%]">Candidato</th>
            <th className="px-[1%]">Cedula</th>
            <th className="px-[1%]">Ciudad</th>
            <th className="px-[1%]">Dirección</th>
            <th className="px-[1%]">Tipo de Poligrafía</th>
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
                    ? "textos gris px-[1%]  rounded-l-[10px]"
                    : "textos gris px-[1%] py-[0.7%] rounded-l-[10px]"
                }
              >
                <img
                  src="/svg/usuarios/foto.svg"
                  alt={poligrafia.fecha}
                  className="w-10 h-10 rounded-full object-cover"
                />
              </td>
              <td
                className={
                  index % 2 === 0
                    ? "textos gris px-[1%]"
                    : "textos gris px-[1%] py-[0.7%]"
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
                {poligrafia.candidato}
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
                    ? "textos gris px-[1%]"
                    : "textos gris px-[1%] py-[0.7%]"
                }
              >
                {poligrafia.direccion}
              </td>
              
              <td
                className={
                  index % 2 === 0
                    ? "rounded-r-[10px] px-[1%]"
                    : "rounded-r-[10px] px-[1%] py-[0.7%]"
                }
              >
                {poligrafia.tipo}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tabla;