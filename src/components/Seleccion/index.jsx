import React from "react";
import { dataSeleccion } from "./Data/Data";
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";

const Tabla = () => {
  
  return (
    <div className="w-full flex flex-col justify-center items-center my-[1.7%]">
      <table className=" w-full border-collapse ">
        <thead className="text-left">
          <tr className="">
            <th className="px-[1%] border-b-[1px] border-[#E5E5E5]">
              Nombre
            </th>
            <th className="px-[1%] border-b-[1px] border-[#E5E5E5]">
              Cedula
            </th>
            <th className="px-[1%] border-b-[1px] border-[#E5E5E5]">
              Telefono
            </th>
            <th className="px-[1%] border-b-[1px] border-[#E5E5E5]">
              Ciudad
            </th>
            <th className="px-[1%] border-b-[1px] border-[#E5E5E5]">
              Correo Electronico
            </th>
            <th className="px-[1%] border-b-[1px] border-[#E5E5E5]">
              Cargo al que Aspirar
            </th>
            <th className="px-[1%] border-b-[1px] border-[#E5E5E5]">
              Aspiracion Salarial
            </th>
          </tr>
        </thead>
        <tbody>
          {dataSeleccion.map((seleccion, index) => (
            <tr
              key={seleccion.id}
              className={index % 2 === 0 ? "" : "bg-blanco-suave"}
            >
              <td
                className={
                  index % 2 === 0
                    ? "textos gris px-[1%] py-[1.4%] rounded-l-[10px]"
                    : "textos gris px-[1%] py-[0.7%] rounded-l-[10px]"
                }
              >
                {seleccion.nombre}
              </td>
              <td
                className={
                  index % 2 === 0
                    ? "textos gris px-[1%] "
                    : "textos gris px-[1%]"
                }
              >
                {seleccion.cedula}
              </td>
              <td
                className={
                  index % 2 === 0
                    ? "textos gris px-[1%] "
                    : "textos gris px-[1%]"
                }
              >
                {seleccion.telefono}
              </td>
              <td
                className={
                  index % 2 === 0
                    ? "textos gris px-[1%] "
                    : "textos gris px-[1%]"
                }
              >
                {seleccion.ciudad}
              </td>
              <td
                className={
                  index % 2 === 0
                    ? "textos gris px-[1%] "
                    : "textos gris px-[1%]"
                }
              >
                {seleccion.correo}
              </td>
              <td
                className={
                  index % 2 === 0
                    ? "textos gris px-[1%] "
                    : "textos gris px-[1%]"
                }
              >
                {seleccion.cargo}
              </td>
              <td
                className={
                  index % 2 === 0
                    ? "textos gris px-[1%] "
                    : "textos gris px-[1%]"
                }
              >
                {seleccion.aspiracionSalarial}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tabla;
