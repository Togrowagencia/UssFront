import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SelectPoligrafia = () => {
  const [showOptions, setShowOptions] = useState(false);
  const navigate = useNavigate();

  const delitos = [
    { value: "poligrafia-especifico", label: "Poligrafia examen especifico", path: "/poligrafia/especifico" },
    { value: "poligrafia-preempleo", label: "Poligrafia examen preempleo", path: "/poligrafia/preempleo" },
    { value: "poligrafia-rutina", label: "Poligrafia examen de rutina", path: "/poligrafia/rutina" },
    { value: "poligrafia-adjunto", label: "Poligrafia con adjunto", path: "/poligrafia/adjunto" },
  ];

  const handleSelectDelito = (delito) => {
    navigate(delito.path);
    setShowOptions(false);
  };

  return (
    <div className="flex border-b border-b-[#C1C1C1] w-[14%] items-center relative">
      <div className="w-[100%] relative">
        <div
          className="textos gris cursor-pointer flex items-center justify-between px-[4%] mb-[3.2%]"
          onClick={() => setShowOptions(!showOptions)}
        >
          <h4 className="gris">Poligrafias</h4>
          <img
            src="/svg/drawers/flecha.svg"
            className={`transition-transform duration-350 w-[4.5%] ${
              showOptions ? "rotate-180" : ""
            }`}
          />
        </div>
        {showOptions && (
          <div className="absolute top-full left-0 w-[37.2vh] bg-[#F5F5F5] sombra rounded-[10px] mt-[5%] z-10 py-[4%]">
            {delitos.map((delito) => (
              <div
                key={delito.value}
                className="textos gris px-[4%] cursor-pointer"
                onClick={() => handleSelectDelito(delito)}
              >
                <h4 className="gris hover:text-[#fff] hover:bg-[#d66a00] rounded-[5px] px-[6%] py-[4%]">
                  {delito.label}
                </h4>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectPoligrafia;
