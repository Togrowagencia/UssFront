import React from "react";
import { gestionAdversosData } from "./Data/Data";
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";

const Tabla = () => {
  const handleEliminar = (id) => {
    Swal.fire({
      title: "¿Está seguro de eliminar el adversario?",
      text: "Una vez eliminado, no podrás recuperar la información asociada a este adverso.",
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
            <th className="px-[1%]">Candidato</th>
            <th className="px-[1%]">Cedula</th>
            <th className="px-[1%]">Empresa</th>
            <th className="px-[1%]">Ciudad</th>
            <th className="px-[1%]">Delito</th>
            <th className="px-[1%]">Estado</th>
            <th className="px-[1%]">Editar/Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {gestionAdversosData.map((adversos, index) => (
            <tr
              key={adversos.id}
              className={index % 2 === 0 ? "bg-blanco-suave " : ""}
            >
              <td
                className={
                  index % 2 === 0
                    ? "textos gris px-[1%]"
                    : "textos gris px-[1%] py-[0.7%]"
                }
              >
                {adversos.candidato}
              </td>
              <td
                className={
                  index % 2 === 0
                    ? "textos gris px-[1%]"
                    : "textos gris px-[1%] py-[0.7%]"
                }
              >
                {adversos.cedula}
              </td>
              <td
                className={
                  index % 2 === 0
                    ? "textos gris px-[1%]"
                    : "textos gris px-[1%] py-[0.7%]"
                }
              >
                {adversos.empresa}
              </td>
              <td
                className={
                  index % 2 === 0
                    ? "textos gris px-[1%]"
                    : "textos gris px-[1%] py-[0.7%]"
                }
              >
                {adversos.ciudad}
              </td>
              <td
                className={
                  index % 2 === 0
                    ? "textos gris px-[1%]"
                    : "textos gris px-[1%] py-[0.7%]"
                }
              >
                {adversos.delito}
              </td>
              <td
                className={
                  index % 2 === 0
                    ? "px-[1%] blanco text-center"
                    : "px-[1%] py-[0.7%] blanco text-center"
                }
              >
                <p
                  className={
                    adversos.estado === "Inactivo"
                      ? "bg-rojo rounded-[5px] px-[1%] py-[0.7%]"
                      : "bg-verde rounded-[5px] px-[1%] py-[0.7%]"
                  }
                >
                  {adversos.estado}
                </p>
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
                <button onClick={() => handleEliminar(adversos.id)}>
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
    </div>
  );
};

export default Tabla;
