import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CrearUsuarioDrawer from "@/components/Drawers/CrearUsuario";
import CrearEmpresaDrawer from "@/components/Drawers/CrearEmpresa";

const Accesos = () => {
  const navigate = useNavigate();
  const [openUsuario, setOpenUsuario] = useState(false);
  const [openEmpresa, setOpenEmpresa] = useState(false);
  const showDrawer = () => {
    setOpenUsuario(true);
  };
  const onCloseUsuario = () => {
    setOpenUsuario(false);
  };
  const showDrawerEmpresa = () => {
    setOpenEmpresa(true);
  };
  const onCloseEmpresa = () => {
    setOpenEmpresa(false);
  };

  return (
    <div className="flex w-full h-full gap-[2.95%]">
      <div className="flex bg-mostaza-suave rounded-[10px] sombra w-[23%] h-[117px] relative">
        <div className="flex w-full h-full px-[7%] ">
          <div className="flex justify-center items-center">
            <img src="/svg/dashboard/usuario.svg" alt="" />
          </div>

          <div className="flex justify-center items-center w-[66%]">
            <h3 className="blanco px-[10%] cursor-pointer">Crear Usuario</h3>
          </div>

          <div className="flex justify-end items-center absolute right-[-1.5vh] top-[33%]">
            <img
              onClick={showDrawer}
              src="/svg/dashboard/flechaA.svg"
              alt=""
              className="cursor-pointer w-[100%]"
            />
          </div>
        </div>
      </div>

      <div className="flex border-2 border-[#ff7f00] rounded-[10px] sombra w-[23.5%] h-[117px] relative">
        <div className="flex w-full h-full px-[7%]">
          <div className="flex justify-center items-center">
            <img src="/svg/dashboard/empresa.svg" alt="" />
          </div>

          <div className="flex justify-center items-center w-[66%]">
            <h3 className="gris px-[10%]">Crear Empresa</h3>
          </div>

          <div className="flex justify-end items-center absolute right-[-1.5vh] top-[33%]">
            <img
              onClick={showDrawerEmpresa}
              src="/svg/dashboard/flechaN.svg"
              alt=""
              className="cursor-pointer w-[100%]"
            />
          </div>
        </div>
      </div>

      <div className="flex bg-mostaza-suave rounded-[10px] sombra w-[23.5%] h-[117px] relative">
        <div className="flex w-full h-full px-[7%]">
          <div className="flex justify-center items-center">
            <img src="/svg/dashboard/adversos.svg" alt="" />
          </div>

          <div className="flex justify-center items-center w-[66%]">
            <h3 className="blanco px-[10%]">Adversos</h3>
          </div>

          <div className="flex justify-end items-center absolute right-[-1.5vh] top-[33%]">
            <img
              onClick={() => {
                navigate("/gestion-adversos");
              }}
              src="/svg/dashboard/flechaA.svg"
              alt=""
              className="cursor-pointer w-[100%]"
            />
          </div>
        </div>
      </div>

      <div className="flex border-2 border-[#ff7f00] rounded-[10px] sombra w-[23%] h-[117px] relative">
        <div className="flex w-full h-full px-[7%]">
          <div className="flex justify-center items-center">
            <img src="/svg/dashboard/consolidado.svg" alt="" />
          </div>

          <div className="flex justify-center items-center w-[66%]">
            <h3 className="gris pl-[26%]">Consolidado USS</h3>
          </div>

          <div className="flex justify-end items-center absolute right-[-1.8vh] top-[33%]">
            <img
              onClick={() => {
                navigate("/consolidado-uss");
              }}
              src="/svg/dashboard/flechaN.svg"
              alt=""
              className="cursor-pointer w-[100%]"
            />
          </div>
        </div>
      </div>
      <CrearUsuarioDrawer
        openUsuario={openUsuario}
        onCloseUsuario={onCloseUsuario}
      />
      <CrearEmpresaDrawer
        openEmpresa={openEmpresa}
        onCloseEmpresa={onCloseEmpresa}
      />
    </div>
  );
};

export default Accesos;
