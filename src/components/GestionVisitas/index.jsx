import React from "react";
import { dataVisitas } from "./Data/Data";
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";

const Tabla = () => {
  const handleEliminar = (id) => {
    Swal.fire({
      title: "¿Está seguro de eliminar la visita?",
      text: "Una vez eliminado, no podrás recuperar la información asociada a esta visita.",
      imageUrl: "/svg/drawers/eliminarR.svg",
      showCancelButton: true,
      confirmButtonColor: "#FF7F00",
      cancelButtonColor: "#3A3A3A",
      confirmButtonText: "Confirmar",
      cancelButtonText: "Cancelar",
      customClass: {
        popup: "custom-popup-class",
        confirmButton: "custom-confirm-button",
        cancelButton: "custom-cancel-button",
        image: "custom-image-class",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(id);
      }
    });
  };
  return (
    <div className="w-full flex flex-col justify-center items-center my-[1.7%]">
      <table className=" w-full border-collapse ">
        <thead className="text-left">
          <tr className="">
            <th className="px-[1%] border-b-[1px] border-[#E5E5E5] w-[10%]">
              Fecha
            </th>
            <th className="px-[1%] border-b-[1px] border-[#E5E5E5] w-[16%]">
              Nombre
            </th>
            <th className="px-[1%] border-b-[1px] border-[#E5E5E5] w-[10%]">
              Cedula
            </th>
            <th className="px-[1%] border-b-[1px] border-[#E5E5E5] w-[10%]">
              Ciudad
            </th>
            <th className="px-[1%] border-b-[1px] border-[#E5E5E5] w-[10%]">
              Empresa
            </th>
            <th className="px-[1%] border-b-[1px] border-[#E5E5E5] w-[10%]">
              Editar/Eliminar
            </th>
          </tr>
        </thead>
        <tbody>
          {dataVisitas.map((visita, index) => (
            <tr
              key={visita.id}
              className={index % 2 === 0 ? "" : "bg-blanco-suave"}
            >
              <td
                className={
                  index % 2 === 0
                    ? "textos gris px-[1%] py-[1.4%] rounded-l-[10px]"
                    : "textos gris px-[1%] py-[0.7%] rounded-l-[10px]"
                }
              >
                {visita.fecha}
              </td>
              <td
                className={
                  index % 2 === 0
                    ? "textos gris px-[1%] "
                    : "textos gris px-[1%]"
                }
              >
                {visita.nombre}
              </td>
              <td
                className={
                  index % 2 === 0
                    ? "textos gris px-[1%] "
                    : "textos gris px-[1%]"
                }
              >
                {visita.cedula}
              </td>
              <td
                className={
                  index % 2 === 0
                    ? "textos gris px-[1%] "
                    : "textos gris px-[1%]"
                }
              >
                {visita.ciudad}
              </td>
              <td
                className={
                  index % 2 === 0
                    ? "textos gris px-[1%] "
                    : "textos gris px-[1%]"
                }
              >
                {visita.empresa}
              </td>
              <td
                className={
                  index % 2 === 0
                    ? "rounded-r-[10px] px-[1%]  "
                    : "rounded-r-[10px] px-[1%]"
                }
              >
                <div className="flex justify-start items-center">
                  <button>
                    <img
                      src="/svg/usuarios/editar.svg"
                      alt="Editar"
                      className="cursor-pointer"
                    />
                  </button>
                  <button onClick={() => handleEliminar(poligrafia.id)}>
                    <img
                      src="/svg/usuarios/eliminar.svg"
                      alt="Eliminar"
                      className="cursor-pointer"
                    />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tabla;
