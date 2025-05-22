import React from "react";

const Input = ({
  titulo,
  placeholder,
  valor,
  onChange,
  className = "",
  type = "text",
  required = false,
}) => {
  return (
    <div className={`flex ${className}`}>
      <div className="flex flex-col gap-[1%] w-[100%] relative">
        <h4 className="gris-suave">
          {titulo}
          {required && " *"}
        </h4>
        <input
          type={type}
          value={valor}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="textos gris mb-[0.5%] border-b border-[#E0E0E0] w-[94.1%] focus:outline-none bg-transparent px-[3%]"
          required={required}
        />
      </div>
    </div>
  );
};

export default Input;
