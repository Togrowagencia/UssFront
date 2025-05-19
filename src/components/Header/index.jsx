import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Buscador from "./Buscador";
import Notificacion from "./Notificacion";
import CrearUsuarioDrawer from "../Drawers/CrearUsuario";
import CrearEmpresaDrawer from "../Drawers/CrearEmpresa";
export const Header = ({ onSearch }) => {
  const location = useLocation();
  const isDashboardPage = location.pathname === "/dashboard";
  const isUsuariosPage = location.pathname === "/usuarios";
  const isEmpresasPage = location.pathname === "/empresas";
  // Estado para el drawer
  const [openUsuario, setOpenUsuario] = useState(false);
  const [openEmpresa, setOpenEmpresa] = useState(false);
  const showDrawerUsuario = () => setOpenUsuario(true);
  const onCloseUsuario = () => setOpenUsuario(false);
  const showDrawerEmpresa = () => setOpenEmpresa(true);
  const onCloseEmpresa = () => setOpenEmpresa(false);

  return (
    <div className="h-[10%] w-full flex justify-between items-end">
      {isDashboardPage ? (
        <h3 className="negro font-[700] w-[26.2%]">Hola, Bienvenido a USS</h3>
      ) : null}
      {isUsuariosPage ? (
        <div className="flex items-center justify-end w-full mx-[1%]">
          <button
            className="bg-mostaza-suave rounded-[5px] px-[1%] py-[0.7%] flex items-center gap-[3%] w-[11%]"
            onClick={showDrawerUsuario}
          >
            <p className="textos blanco">Crear Usuario</p>
            <img src="/svg/drawers/mas.svg" />
          </button>
        </div>
      ) : null}
      {isEmpresasPage ? (
        <div className="flex items-center justify-end w-full mx-[1%]">
          <button
            className="bg-mostaza-suave rounded-[5px] px-[1%] py-[0.7%] flex items-center gap-[3%] w-[11%]"
            onClick={showDrawerEmpresa}
          >
            <p className="textos blanco">Crear Empresa</p>
            <img src="/svg/drawers/mas.svg" />
          </button>
        </div>
      ) : null}
      <div className="flex items-end justify-end gap-[2%]">
        <div className="hover:w-[15vw] w-[10%] flex items-end justify-end">
          <Buscador onSearch={onSearch} />
        </div>
        <Notificacion />
        <img src="/svg/header/configuracion.svg" className="mx-[3%]" />
      </div>

      {/* Drawer de Crear Usuario */}
      <CrearUsuarioDrawer
        openUsuario={openUsuario}
        onCloseUsuario={onCloseUsuario}
      />
      {/* Drawer de Crear Empresa */}
      <CrearEmpresaDrawer
        openEmpresa={openEmpresa}
        onCloseEmpresa={onCloseEmpresa}
      />
    </div>
  );
};

export default Header;
