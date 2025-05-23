import React from "react";
import { dataSeleccion } from "./Data/Data";
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";

const Tabla = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center my-[1.7%]">
      <div className="w-[100%] overflow-x-auto overflow-y-auto">
        <div className="min-w-[125rem] max-h-[40rem]">
          <table className="w-full border-collapse table-fixed">
            <colgroup>
              {/* Nombre */}
              <col style={{ width: "12vw" }} />
              {/* Cedula */}
              <col style={{ width: "7vw" }} />
              {/* Telefono */}
              <col style={{ width: "7vw" }} />
              {/* Ciudad */}
              <col style={{ width: "7vw" }} />
              {/* Correo Electronico */}
              <col style={{ width: "16vw" }} />
              {/* Cargo al que Aspirar */}
              <col style={{ width: "14vw" }} />
              {/* Aspiracion Salarial */}
              <col style={{ width: "10vw" }} />
              {/* Empresa */}
              <col style={{ width: "10vw" }} />
              {/* Fecha Contacto */}
              <col style={{ width: "8vw" }} />
              {/* Observaciones */}
              <col style={{ width: "10vw" }} />
              {/* Fecha Entrevista */}
              <col style={{ width: "10vw" }} />
              {/* Modalidad de entrevista */}
              <col style={{ width: "12.5vw" }} />
              {/* Evaluador */}
              <col style={{ width: "13vw" }} />
              {/* Fecha de Evaluacion */}
              <col style={{ width: "10vw" }} />
              {/* Modalidad de evacuacion */}
              <col style={{ width: "12.5vw" }} />
              {/* Puebas Aplicadas */}
              <col style={{ width: "12vw" }} />
              {/* Resultado */}
              <col style={{ width: "7vw" }} />
              {/* Observacion Final */}
              <col style={{ width: "11vw" }} />
              {/* Adjuntos */}
              <col style={{ width: "12.2vw" }} />
            </colgroup>
            <thead className="text-left">
              <tr className="">
                <th className="px-[1%] border-b-[1px] border-[#E5E5E5] whitespace-nowrap">
                  Nombre
                </th>
                <th className="px-[1%] border-b-[1px] border-[#E5E5E5] whitespace-nowrap">
                  Cedula
                </th>
                <th className="px-[1%] border-b-[1px] border-[#E5E5E5] whitespace-nowrap">
                  Telefono
                </th>
                <th className="px-[1%] border-b-[1px] border-[#E5E5E5] whitespace-nowrap">
                  Ciudad
                </th>
                <th className="px-[1%] border-b-[1px] border-[#E5E5E5] whitespace-nowrap">
                  Correo Electronico
                </th>
                <th className="px-[1%] border-b-[1px] border-[#E5E5E5] whitespace-nowrap">
                  Cargo al que Aspirar
                </th>
                <th className="px-[1%] border-b-[1px] border-[#E5E5E5] whitespace-nowrap">
                  Aspiracion Salarial
                </th>
                <th className="px-[1%] border-b-[1px] border-[#E5E5E5] whitespace-nowrap">
                  Empresa
                </th>
                <th className="px-[1%] border-b-[1px] border-[#E5E5E5] whitespace-nowrap">
                  Fecha Contacto
                </th>
                <th className="px-[1%] border-b-[1px] border-[#E5E5E5] whitespace-nowrap">
                  Observaciones
                </th>
                <th className="px-[1%] border-b-[1px] border-[#E5E5E5] whitespace-nowrap">
                  Fecha de Entrevista
                </th>
                <th className="px-[1%] border-b-[1px] border-[#E5E5E5] whitespace-nowrap">
                  Modalidad de entrevista
                </th>
                <th className="px-[1%] border-b-[1px] border-[#E5E5E5] whitespace-nowrap">
                  Evaluador
                </th>
                <th className="px-[1%] border-b-[1px] border-[#E5E5E5] whitespace-nowrap">
                  Fecha de Evaluacion
                </th>
                <th className="px-[1%] border-b-[1px] border-[#E5E5E5] whitespace-nowrap">
                  Modalidad de evacuacion
                </th>
                <th className="px-[1%] border-b-[1px] border-[#E5E5E5] whitespace-nowrap">
                  Puebas Aplicadas
                </th>
                <th className="px-[1%] border-b-[1px] border-[#E5E5E5] whitespace-nowrap">
                  Resultado
                </th>
                <th className="px-[1%] border-b-[1px] border-[#E5E5E5] whitespace-nowrap">
                  Observacion Final
                </th>
                <th className="px-[1%] border-b-[1px] border-[#E5E5E5] whitespace-nowrap">
                  Adjuntos
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
                        ? "textos gris px-[1%] py-[0.6%] rounded-l-[10px] truncate"
                        : "textos gris px-[1%] py-[0.4%] rounded-l-[10px] truncate"
                    }
                    title={seleccion.nombre}
                  >
                    {seleccion.nombre}
                  </td>
                  <td
                    className={
                      index % 2 === 0
                        ? "textos gris px-[1%] truncate"
                        : "textos gris px-[1%] truncate"
                    }
                    title={seleccion.cedula}
                  >
                    {seleccion.cedula}
                  </td>
                  <td
                    className={
                      index % 2 === 0
                        ? "textos gris px-[1%] truncate"
                        : "textos gris px-[1%] truncate"
                    }
                    title={seleccion.telefono}
                  >
                    {seleccion.telefono}
                  </td>
                  <td
                    className={
                      index % 2 === 0
                        ? "textos gris px-[1%] truncate"
                        : "textos gris px-[1%] truncate"
                    }
                    title={seleccion.ciudad}
                  >
                    {seleccion.ciudad}
                  </td>
                  <td
                    className={
                      index % 2 === 0
                        ? "textos gris px-[1%] truncate"
                        : "textos gris px-[1%] truncate"
                    }
                    title={seleccion.correo}
                  >
                    {seleccion.correo}
                  </td>
                  <td
                    className={
                      index % 2 === 0
                        ? "textos gris px-[1%] truncate"
                        : "textos gris px-[1%] truncate"
                    }
                    title={seleccion.cargo}
                  >
                    {seleccion.cargo}
                  </td>
                  <td
                    className={
                      index % 2 === 0
                        ? "textos gris px-[1%] truncate"
                        : "textos gris px-[1%] truncate"
                    }
                    title={seleccion.aspiracionSalarial}
                  >
                    {seleccion.aspiracionSalarial}
                  </td>
                  <td
                    className={
                      index % 2 === 0
                        ? "textos gris px-[1%] truncate"
                        : "textos gris px-[1%] truncate"
                    }
                    title={seleccion.empresa}
                  >
                    {seleccion.empresa}
                  </td>
                  <td
                    className={
                      index % 2 === 0
                        ? "textos gris px-[1%] truncate"
                        : "textos gris px-[1%] truncate"
                    }
                    title={seleccion.fechaContacto}
                  >
                    {seleccion.fechaContacto}
                  </td>
                  <td
                    className={
                      index % 2 === 0
                        ? "textos gris px-[1%] truncate"
                        : "textos gris px-[1%] truncate"
                    }
                    title={seleccion.observaciones}
                  >
                    {seleccion.observaciones}
                  </td>
                  <td
                    className={
                      index % 2 === 0
                        ? "textos gris px-[1%] truncate"
                        : "textos gris px-[1%] truncate"
                    }
                    title={seleccion.fechaEntrevista}
                  >
                    {seleccion.fechaEntrevista}
                  </td>
                  <td
                    className={
                      index % 2 === 0
                        ? "textos gris px-[1%] truncate"
                        : "textos gris px-[1%] truncate"
                    }
                    title={seleccion.modalidadEntrevista}
                  >
                    {seleccion.modalidadEntrevista}
                  </td>
                  <td
                    className={
                      index % 2 === 0
                        ? "textos gris px-[1%] truncate"
                        : "textos gris px-[1%] truncate"
                    }
                    title={seleccion.evaluador}
                  >
                    {seleccion.evaluador}
                  </td>
                  <td
                    className={
                      index % 2 === 0
                        ? "textos gris px-[1%] truncate"
                        : "textos gris px-[1%] truncate"
                    }
                    title={seleccion.fechaEvaluacion}
                  >
                    {seleccion.fechaEvaluacion}
                  </td>
                  <td
                    className={
                      index % 2 === 0
                        ? "textos gris px-[1%] truncate"
                        : "textos gris px-[1%] truncate"
                    }
                    title={seleccion.modalidadEvaluacion}
                  >
                    {seleccion.modalidadEvaluacion}
                  </td>
                  <td
                    className={
                      index % 2 === 0
                        ? "textos gris px-[1%] truncate"
                        : "textos gris px-[1%] truncate"
                    }
                    title={seleccion.pruebasAplicadas}
                  >
                    {seleccion.pruebasAplicadas}
                  </td>
                  <td
                    className={
                      index % 2 === 0
                        ? "textos gris px-[1%] truncate"
                        : "textos gris px-[1%] truncate"
                    }
                    title={seleccion.resultado}
                  >
                    {seleccion.resultado}
                  </td>
                  <td
                    className={
                      index % 2 === 0
                        ? "textos gris px-[1%] truncate"
                        : "textos gris px-[1%] truncate"
                    }
                    title={seleccion.observacionFinal}
                  >
                    {seleccion.observacionFinal}
                  </td>
                  <td
                    className={
                      index % 2 === 0
                        ? "textos gris px-[1%] truncate"
                        : "textos gris px-[1%] truncate rounded-r-[10px]"
                    }
                    
                  >
                    {seleccion.adjuntos ? (
                      <div className="flex">
                        <img src="/svg/adjunto.svg" alt="adjunto" />
                        <p className="textos gris px-[1%] truncate">Archivo Adjunto.doc</p>
                      </div>
                    ) : null}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Tabla;
