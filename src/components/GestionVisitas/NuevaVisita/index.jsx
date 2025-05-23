import React from "react";
import Empresas from "./secciones/Empresas";
import ConceptoNro1 from "./secciones/ConceptoNro1";
const FormularioNuevaVisita = () => {
  return (
    <div className="flex flex-col w-full overflow-y-auto h-full">
      <Empresas />
      <ConceptoNro1 />
    </div>
  );
};

export default FormularioNuevaVisita;
