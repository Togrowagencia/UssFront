import React from "react";

const formatearFecha = (valor) => {
  // Elimina todo lo que no sea número
  let soloNumeros = valor.replace(/[^0-9]/g, "");
  // Limita a 8 caracteres (DDMMAAAA)
  soloNumeros = soloNumeros.slice(0, 8);
  // Inserta las barras
  if (soloNumeros.length > 4) {
    return `${soloNumeros.slice(0, 2)}/${soloNumeros.slice(2, 4)}/${soloNumeros.slice(4)}`;
  } else if (soloNumeros.length > 2) {
    return `${soloNumeros.slice(0, 2)}/${soloNumeros.slice(2)}`;
  } else {
    return soloNumeros;
  }
};

const FechaInput = ({
  titulo,
  valor,
  onChange,
  className = "",
  required = false,
}) => {
  const handleInputChange = (e) => {
    const valorFormateado = formatearFecha(e.target.value);
    onChange(valorFormateado);
  };

  return (
    <div className={`flex ${className}`}>
      <div className="flex flex-col gap-[1%] w-[100%] relative">
        <h4 className="gris-suave">
          {titulo}
          {required && " *"}
        </h4>
        <input
          type="text"
          value={valor}
          onChange={handleInputChange}
          placeholder="DD/MM/AAAA"
          maxLength={10}
          className="textos gris mb-[0.5%] px-[3%] border-b border-[#E0E0E0] w-[94.1%] focus:outline-none bg-transparent"
        />
      </div>
    </div>
  );
};

export default FechaInput;

