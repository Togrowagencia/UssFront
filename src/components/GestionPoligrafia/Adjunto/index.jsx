import React from "react";
import { dataPoligrafia } from "../Data/Data";
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";
import ColumnGroup from "antd/es/table/ColumnGroup";

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
        <colgroup>
          {/* Fecha */}
          <col style={{ width: "9vw" }} />
          {/* Candidato */}
          <col style={{ width: "10vw" }} />
          {/* Cedula */}
          <col style={{ width: "10vw" }} />
          {/* Ciudad */}
          <col style={{ width: "10vw" }} />
          {/* Dirección */}
          <col style={{ width: "14vw" }} />
          {/* Empresa */}
          <col style={{ width: "15vw" }} />
          {/* Resultado */}
          <col style={{ width: "14vw" }} />
          {/* Conclusion */}
          <col style={{ width: "14vw" }} />
          {/* Editar/Eliminar */}
          <col style={{ width: "10vw" }} />
        </colgroup>

        <thead className="text-left ">
          <tr className="">
            <th className="px-[1%]">Fecha</th>
            <th className="px-[1%]">Candidato</th>
            <th className="px-[1%]">Cedula</th>
            <th className="px-[1%]">Ciudad</th>
            <th className="px-[1%]">Dirección</th>
            <th className="px-[1%]">Empresa</th>
            <th className="px-[1%]">Resultado</th>
            <th className="px-[1%]">Conclusion</th>
            <th className="px-[1%]">Editar/Eliminar</th>
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
                    ? "textos gris px-[1%] rounded-l-[10px]"
                    : "textos gris px-[1%] py-[0.7%] rounded-l-[10px]"
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
                    ? "textos gris px-[1%]"
                    : "textos gris px-[1%] py-[0.7%]"
                }
              >
                {poligrafia.empresa}
              </td>
              <td
                className={
                  index % 2 === 0
                    ? "px-[1%]"
                    : "px-[1%] py-[0.7%]"
                }
              >
                {poligrafia.resultado}
              </td>
              <td
                className={
                  index % 2 === 0
                    ? "textos gris px-[1%] truncate max-w-[8vw]"
                    : "textos gris px-[1%] py-[0.7%] truncate max-w-[8vw]"
                }
              >
                {poligrafia.conclusion}
              </td>
              <td className="px-[1%] rounded-r-[10px] py-[0.7%]">
                <button>
                  {" "}
                  <img
                    src="/svg/usuarios/editar.svg"
                    alt="Editar"
                    className="cursor-pointer"
                  />{" "}
                </button>
                <button onClick={() => handleEliminar(poligrafia.id)}>
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
      <div className="fixed bottom-[4%] right-[4%] w-full flex justify-end mt-[1%] gap-[1%]">
        <button className="bg-verde rounded-[5px] flex items-center justify-center gap-[3%] cursor-pointer w-[11.5vh] h-[4vh]">
          <img src="/svg/exportar.svg" />
          <p className="textos blanco">Exportar</p>
        </button>
        <button className="bg-verde rounded-[5px] flex items-center justify-center gap-[3%] cursor-pointer w-[22vh] h-[4vh]">
          <img src="/svg/exportar.svg" />
          <p className="textos blanco">Importar masivamente</p>
        </button>
        <button className="bg-azul rounded-[5px] flex items-center justify-center gap-[3%] cursor-pointer w-[20vh] h-[4vh]">
          <img src="/svg/graficos.svg" />
          <p className="textos blanco">Graficos del modulo</p>
        </button>
      </div>
    </div>
  );
};

export default Tabla;
