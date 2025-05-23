import React, { useState } from "react";

const Select = ({
  titulo,
  placeholder,
  opciones,
  valorSeleccionado,
  onChange,
  className = "",
  required = false,
  disabled = false,
}) => {
  const [showOpciones, setShowOpciones] = useState(false);

  const handleSelect = (valor) => {
    onChange(valor);
    setShowOpciones(false);
  };

  const obtenerValorMostrado = (valor) => {
    if (!valor) return "";
    if (typeof valor === "string") return valor;
    if (typeof valor === "object") {
      return valor.nombre || valor.label || valor.value || "";
    }
    return "";
  };

  return (
    <div className={`flex ${className}`}>
      <div className="flex flex-col gap-[1%] w-[100%] relative">
        <h4 className="gris-suave">
          {titulo}
          {required && " *"}
        </h4>
        <div
          className="flex border-b border-[#E0E0E0] justify-between items-center cursor-pointer"
          onClick={() => !disabled && setShowOpciones(!showOpciones)}
        >
          <p className="textos gris mb-[0.5%] ml-[3%]">
            {obtenerValorMostrado(valorSeleccionado) || placeholder}
          </p>
          <img
            src="/svg/drawers/flecha.svg"
            className={`w-[0.7vh] transition-transform duration-350 mr-[3%] ${
              showOpciones ? "rotate-180" : ""
            }`}
          />
        </div>
      </div>
      {showOpciones && (
        <div className="absolute top-0 left-0 bg-[#F5F5F5] w-[18%] sombra rounded-[10px] mt-[3%] z-10">
          {opciones.map((opcion, index) => (
            <div
              key={index}
              className="textos gris px-[5%] cursor-pointer"
              onClick={() => handleSelect(opcion)}
            >
              <h4 className="gris hover:text-[#fff] hover:bg-[#d66a00] rounded-[5px] px-[5%] py-[2%]">
                {obtenerValorMostrado(opcion)}
              </h4>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;
