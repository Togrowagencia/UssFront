import React from "react";
import { EstudiosSeguridadData } from "./Data/Data";
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";

const Tabla = () => {
  const handleEliminar = (id) => {
    Swal.fire({
      title: "¿Está seguro de eliminar el usuario?",
      text: "Una vez eliminado, no podrás recuperar la información asociada a este usuario.",
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
        <thead className="text-left ">
          <tr className="">
            <th className="px-[1%]">Fecha</th>
            <th className="px-[1%]">Nombre</th>
            <th className="px-[1%]">Cedula</th>
            <th className="px-[1%]">Ciudad</th>
            <th className="px-[1%]">Direccion</th>
            <th className="px-[1%]">Empresa</th>
            <th className="px-[1%]">Resultado</th>
            <th className="px-[1%]">Conclusion</th>
            <th className="px-[1%]">Editar/Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {EstudiosSeguridadData.map((estudios, index) => (
            <tr
              key={estudios.id}
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
                  alt={estudios.fecha}
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
                {estudios.nombre}
              </td>
              <td
                className={
                  index % 2 === 0
                    ? "textos gris px-[1%]"
                    : "textos gris px-[1%] py-[0.7%]"
                }
              >
                {estudios.cedula}
              </td>
              <td
                className={
                  index % 2 === 0
                    ? "textos gris px-[1%]"
                    : "textos gris px-[1%] py-[0.7%]"
                }
              >
                {estudios.ciudad}
              </td>
              <td
                className={
                  index % 2 === 0
                    ? "textos gris px-[1%]"
                    : "textos gris px-[1%] py-[0.7%]"
                }
              >
                {estudios.direccion}
              </td>
              <td
                className={
                  index % 2 === 0
                    ? "textos gris px-[1%]"
                    : "textos gris px-[1%] py-[0.7%]"
                }
              >
                {estudios.resultado}
              </td>
              <td
                className={
                  index % 2 === 0
                    ? "px-[1%]"
                    : "px-[1%] py-[0.7%]"
                }
              >
                {estudios.empresa}
              </td>
              <td
                className={
                  index % 2 === 0
                    ? "px-[1%] truncate max-w-[6vw]"
                    : "px-[1%] py-[0.7%] truncate max-w-[6vw]"
                }
              >
                {estudios.conclusion}
              </td>
              <td
                className={
                  index % 2 === 0
                    ? "rounded-r-[10px] px-[1%]"
                    : "rounded-r-[10px] px-[1%] py-[0.7%]"
                }
              >
                <button>
                  {" "}
                  <img
                    src="/svg/usuarios/editar.svg"
                    alt="Editar"
                    className="cursor-pointer"
                  />{" "}
                </button>
                <button onClick={() => handleEliminar(estudios.id)}>
                  {" "}
                  <img
                    src="/svg/usuarios/eliminar.svg"
                    alt="Eliminar"
                    className="cursor-pointer ml-[100%]"
                  />{" "}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-end items-center w-full gap-[1%] my-[2%]">
        <button className="bg-mostaza-suave rounded-[5px] px-[1%] py-[0.7%] flex items-center gap-[3%] w-[16.3%] cursor-pointer">
          <p className="textos blanco">Agregar Historial Financiero</p>
          <img src="/svg/drawers/mas.svg" alt="agregar" />
        </button>
        <button className="bg-mostaza-suave rounded-[5px] px-[1%] py-[0.7%] flex items-center gap-[3%] w-[14.9%] cursor-pointer">
          <p className="textos blanco">Agregar Novedad Hechos</p>
          <img src="/svg/drawers/mas.svg" alt="agregar" />
        </button>
      </div>
    </div>
  );
};

export default Tabla;
