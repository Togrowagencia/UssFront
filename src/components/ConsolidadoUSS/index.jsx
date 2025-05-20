import React from "react";
import { dataSeleccion } from "./Data/Data";

const Tabla = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center my-[1.7%]">
      <div className="w-[100%] overflow-x-auto overflow-y-auto">
        <div className="min-w-[125rem] max-h-[40rem]">
          <table className="w-full border-collapse table-fixed">
            <colgroup>
              {/* ID */}
              <col style={{ width: "3vw" }} />
              {/* Fecha */}
              <col style={{ width: "6vw" }} />
              {/* Cliente */}
              <col style={{ width: "10vw" }} />
              {/* Ciudad */}
              <col style={{ width: "7vw" }} />
              {/* Cedeula */}
              <col style={{ width: "10vw" }} />
              {/* Nombre */}
              <col style={{ width: "14vw" }} />
              {/* Cargo */}
              <col style={{ width: "14vw" }} />
              {/* Antecedentes */}
              <col style={{ width: "9vw" }} />
              {/* Referencias Laborales */}
              <col style={{ width: "11vw" }} />
              {/* Hechos */}
              <col style={{ width: "9vw" }} />
              {/* Referencias Academicas */}
              <col style={{ width: "13vw" }} />
              {/* Consulta Financiera con Huella */}
              <col style={{ width: "15vw" }} />
              {/* Consulta Financiera sin Huella */}
              <col style={{ width: "15vw" }} />
              {/* Poligrafo */}
              <col style={{ width: "8vw" }} />
              {/* Visita Domiciliaria */}
              <col style={{ width: "11vw" }} />
              {/* Persona que Realiza la visita */}
              <col style={{ width: "14vw" }} />
              {/* Modalidad de visita */}
              <col style={{ width: "11vw" }} />
              {/* Proceso de selección */}
              <col style={{ width: "12vw" }} />
              {/* Observaciones */}
              <col style={{ width: "9vw" }} />
              {/* Facturacion */}
              <col style={{ width: "9vw" }} />
              {/* Historial Financiero */}
              <col style={{ width: "12.2vw" }} />
            </colgroup>
            <thead className="text-left">
              <tr className="">
                <th className="px-[1%] border-b-[1px] border-[#E5E5E5] whitespace-nowrap">
                  ID
                </th>
                <th className="px-[1%] border-b-[1px] border-[#E5E5E5] whitespace-nowrap">
                  Fecha
                </th>
                <th className="px-[1%] border-b-[1px] border-[#E5E5E5] whitespace-nowrap">
                  Cliente
                </th>
                <th className="px-[1%] border-b-[1px] border-[#E5E5E5] whitespace-nowrap">
                  Ciudad
                </th>
                <th className="px-[1%] border-b-[1px] border-[#E5E5E5] whitespace-nowrap">
                  Cedeula
                </th>
                <th className="px-[1%] border-b-[1px] border-[#E5E5E5] whitespace-nowrap">
                  Nombre
                </th>
                <th className="px-[1%] border-b-[1px] border-[#E5E5E5] whitespace-nowrap">
                  Cargo
                </th>
                <th className="px-[1%] border-b-[1px] border-[#E5E5E5] whitespace-nowrap">
                  Antecedentes
                </th>
                <th className="px-[1%] border-b-[1px] border-[#E5E5E5] whitespace-nowrap">
                  Referencias Laborales
                </th>
                <th className="px-[1%] border-b-[1px] border-[#E5E5E5] whitespace-nowrap">
                  Hechos
                </th>
                <th className="px-[1%] border-b-[1px] border-[#E5E5E5] whitespace-nowrap">
                  Referencias Academicas
                </th>
                <th className="px-[1%] border-b-[1px] border-[#E5E5E5] whitespace-nowrap">
                  Consulta Financiera con Huella
                </th>
                <th className="px-[1%] border-b-[1px] border-[#E5E5E5] whitespace-nowrap">
                Consulta Financiera sin Huella
                </th>
                <th className="px-[1%] border-b-[1px] border-[#E5E5E5] whitespace-nowrap">
                  Poligrafo
                </th>
                <th className="px-[1%] border-b-[1px] border-[#E5E5E5] whitespace-nowrap">
                  Visita Domiciliaria
                </th>
                <th className="px-[1%] border-b-[1px] border-[#E5E5E5] whitespace-nowrap">
                  Persona que Realiza la visita
                </th>
                <th className="px-[1%] border-b-[1px] border-[#E5E5E5] whitespace-nowrap">
                  Modalidad de visita
                </th>
                <th className="px-[1%] border-b-[1px] border-[#E5E5E5] whitespace-nowrap">
                  Proceso de selección
                </th>
                <th className="px-[1%] border-b-[1px] border-[#E5E5E5] whitespace-nowrap">
                  Observaciones
                </th>
                <th className="px-[1%] border-b-[1px] border-[#E5E5E5] whitespace-nowrap">
                  Facturacion
                </th>
                <th className="px-[1%] border-b-[1px] border-[#E5E5E5] whitespace-nowrap">
                  Historial Financiero
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
                        ? "textos gris px-[1%] py-[0.4%] rounded-l-[10px] truncate"
                        : "textos gris px-[1%] py-[0.28%] rounded-l-[10px] truncate"
                    }
                    title={seleccion.id}
                  >
                    {seleccion.id}
                  </td>
                  <td
                    className={
                      index % 2 === 0
                        ? "textos gris px-[1%] truncate"
                        : "textos gris px-[1%] truncate"
                    }
                    title={seleccion.fecha}
                  >
                    {seleccion.fecha}
                  </td>
                  <td
                    className={
                      index % 2 === 0
                        ? "textos gris px-[1%] truncate"
                        : "textos gris px-[1%] truncate"
                    }
                    title={seleccion.cliente}
                  >
                    {seleccion.cliente}
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
                    title={seleccion.antecedentes}
                  >
                    {seleccion.antecedentes}
                  </td>
                  <td
                    className={
                      index % 2 === 0
                        ? "textos gris px-[1%] truncate"
                        : "textos gris px-[1%] truncate"
                    }
                    title={seleccion.referenciasLaborales}
                  >
                    {seleccion.referenciasLaborales}
                  </td>
                  <td
                    className={
                      index % 2 === 0
                        ? "textos gris px-[1%] truncate"
                        : "textos gris px-[1%] truncate"
                    }
                    title={seleccion.hechos}
                  >
                    {seleccion.hechos}
                  </td>
                  <td
                    className={
                      index % 2 === 0
                        ? "textos gris px-[1%] truncate"
                        : "textos gris px-[1%] truncate"
                    }
                    title={seleccion.referenciasAcademicas}
                  >
                    {seleccion.referenciasAcademicas}
                  </td>
                  <td
                    className={
                      index % 2 === 0
                        ? "textos gris px-[1%] truncate"
                        : "textos gris px-[1%] truncate"
                    }
                    title={seleccion.consultaFinancieraConHuella}
                  >
                    {seleccion.consultaFinancieraConHuella}
                  </td>
                  <td
                    className={
                      index % 2 === 0
                        ? "textos gris px-[1%] truncate"
                        : "textos gris px-[1%] truncate"
                    }
                    title={seleccion.consultaFinancieraSinHuella}
                  >
                    {seleccion.consultaFinancieraSinHuella}
                  </td>
                  <td
                    className={
                      index % 2 === 0
                        ? "textos gris px-[1%] truncate"
                        : "textos gris px-[1%] truncate"
                    }
                    title={seleccion.poligrafo}
                  >
                    {seleccion.poligrafo}
                  </td>
                  <td
                    className={
                      index % 2 === 0
                        ? "textos gris px-[1%] truncate"
                        : "textos gris px-[1%] truncate"
                    }
                    title={seleccion.visitaDomiciliaria}
                  >
                    {seleccion.visitaDomiciliaria}
                  </td>
                  <td
                    className={
                      index % 2 === 0
                        ? "textos gris px-[1%] truncate"
                        : "textos gris px-[1%] truncate"
                    }
                    title={seleccion.personaVisita}
                  >
                    {seleccion.personaVisita}
                  </td>
                  <td
                    className={
                      index % 2 === 0
                        ? "textos gris px-[1%] truncate"
                        : "textos gris px-[1%] truncate"
                    }
                    title={seleccion.modalidadVisita}
                  >
                    {seleccion.modalidadVisita}
                  </td>
                  <td
                    className={
                      index % 2 === 0
                        ? "textos gris px-[1%] truncate"
                        : "textos gris px-[1%] truncate"
                    }
                    title={seleccion.procesoSeleccion}
                  >
                    {seleccion.procesoSeleccion}
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
                        : "textos gris px-[1%] truncate rounded-r-[10px]"
                    }
                    title={seleccion.facturacion}
                  >
                    {seleccion.facturacion}
                  </td>
                  <td
                    className={
                      index % 2 === 0
                        ? "textos gris px-[1%] truncate"
                        : "textos gris px-[1%] truncate rounded-r-[10px]"
                    }
                    title={seleccion.historialFinanciero}
                  >
                    {seleccion.historialFinanciero}
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
