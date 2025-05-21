import React from "react";
import { useNavigate } from "react-router-dom";

const Atajos = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-wrap w-[48.6%] h-[42vh] rounded-[10px] gap-x-[5.5%] gap-y-[4.5%]">
      <div className="flex w-[47.2%] h-[21.5%] bg-blanco-suave rounded-[10px] items-center">
        <div className="flex px-[8%]">
          <h2 className="gris">2</h2>
        </div>
        <div className="flex flex-col">
          <h4 className="gris flex items-center">
            Poligrafía Examen Específico
          </h4>
          <p className="textos-peques2 gris flex items-center mt-[1%]">
            Ultima actualización: 19/03/2025
          </p>
        </div>
        <div className="flex items-center mx-[2%]" onClick={() => navigate("/poligrafia/especifico")}>
          <img src="/svg/dashboard/flechaN.svg" alt="" className="" />
        </div>
      </div>

      <div className="flex w-[47.2%] h-[21.5%] bg-azul rounded-[10px] items-center">
        <div className="flex px-[8%]">
          <h2 className="blanco">1</h2>
        </div>
        <div className="flex flex-col">
          <h4 className="blanco flex items-center">
          Adversos
          </h4>
          <p className="textos-peques2 blanco flex items-center mt-[1%]">
            Ultima actualización: 19/03/2025
          </p>
        </div>
        <div className="flex items-center mx-[2%] justify-end w-[27%]" onClick={() => navigate("/gestion-adversos")}>
          <img src="/svg/dashboard/flechaN.svg" alt="" className="" />
        </div>
      </div>

      <div className="flex w-[47.2%] h-[21.5%] bg-azul rounded-[10px] items-center">
        <div className="flex px-[8%]">
          <h2 className="blanco">2</h2>
        </div>
        <div className="flex flex-col">
          <h4 className="blanco flex items-center w-[90%]">
          Poligrafía Examen de Rutina
          </h4>
          <p className="textos-peques2 blanco flex items-center mt-[1%]">
            Ultima actualización: 19/03/2025
          </p>
        </div>
        <div className="flex items-center mx-[2%]" onClick={() => navigate("/poligrafia/rutina")}>
          <img src="/svg/dashboard/flechaN.svg" alt="" className="" />
        </div>
      </div>

      <div className="flex w-[47.2%] h-[21.5%] bg-blanco-suave rounded-[10px] items-center">
        <div className="flex px-[8%]">
          <h2 className="gris">5</h2>
        </div>
        <div className="flex flex-col">
          <h4 className="gris flex items-center">
          Poligrafias con Adjuntos
          </h4>
          <p className="textos-peques2 gris flex items-center mt-[1%]">
            Ultima actualización: 19/03/2025
          </p>
        </div>
        <div className="flex items-center mx-[2%]" onClick={() => navigate("/poligrafia/adjunto")}>
          <img src="/svg/dashboard/flechaN.svg" alt="" className="" />
        </div>
      </div>

      <div className="flex w-[47.2%] h-[21.5%] bg-blanco-suave rounded-[10px] items-center">
        <div className="flex px-[8%]">
          <h2 className="gris">9</h2>
        </div>
        <div className="flex flex-col">
          <h4 className="gris flex items-center">
          Estudios de Seguridad
          </h4>
          <p className="textos-peques2 gris flex items-center mt-[1%]">
            Ultima actualización: 19/03/2025
          </p>
        </div>
        <div className="flex items-center mx-[2%] justify-end" onClick={() => navigate("/estudios-seguridad")}>
          <img src="/svg/dashboard/flechaN.svg" alt="" className="" />
        </div>
      </div>

      <div className="flex w-[47.2%] h-[21.5%] bg-azul rounded-[10px] items-center">
        <div className="flex px-[8%]">
          <h2 className="blanco">3</h2>
        </div>
        <div className="flex flex-col">
          <h4 className="blanco flex items-center">
            Empresas
          </h4>
          <p className="textos-peques2 blanco flex items-center mt-[1%]">
            Ultima actualización: 19/03/2025
          </p>
        </div>
        <div className="flex items-center mx-[2%] justify-end w-[25.2%]" onClick={() => navigate("/empresas")}>
          <img src="/svg/dashboard/flechaN.svg" alt="" className="" />
        </div>
      </div>

      <div className="flex w-full h-[21.5%] bg-azul rounded-[10px] items-center">
        <div className="flex pl-[4.2%] pr-[2%]">
          <h2 className="blanco">10</h2>
        </div>
        <div className="flex w-full">
          <h4 className="blanco flex items-center">
            Poligrafía Examen Preempleo
          </h4>
          <p className="textos-peques2 blanco flex items-center mx-[4%]">
            Ultima actualización: 19/03/2025
          </p>
        </div>
        <div className="flex items-center justify-end mx-[1%]" onClick={() => navigate("/poligrafia/preempleo")}>
          <img src="/svg/dashboard/flechaN.svg" alt="" className="" />
        </div>
      </div>
    </div>
  );
};

export default Atajos;
