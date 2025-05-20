import React, { useState } from "react";
import { useLocation } from "react-router-dom";

{/* Componentes de filtros */}
import FiltroEmpresa from "./Filtros/FiltroEmpresa";
import FiltroCargo from "./Filtros/FiltroCargo";
import FiltroCiudad from "./Filtros/FiltroCiudad";
import FiltroDelito from "./Filtros/FiltroDelito";
import FiltroEstado from "./Filtros/FiltroEstado";
import FiltroFormacion from "./Filtros/FiltroFormacion";
import FiltroNombre from "./Filtros/FiltroNombre";
import RangoFecha from "./Filtros/RagoFecha";

{/* Drawers */}
import CrearUsuarioDrawer from "../Drawers/CrearUsuario";
import CrearEmpresaDrawer from "../Drawers/CrearEmpresa";
import NuevoAdversoDrawer from "../Drawers/NuevoAdverso";

{/* Componentes */}
import Buscador from "./Buscador";
import Notificacion from "./Notificacion";
import CrearUsuario from "./CrearUsuario";
import CrearEmpresa from "./CrearEmpresa";
import NuevoEstudio from "./NuevoEstudio";
import NuevoAdverso from "./NuevoAdverso";
import NuevaPoligrafia from "./NuevaPoligrafia";
import NuevaSeleccion from "./NuevaSeleccion";
import NuevaVisita from "./NuevaVisita";

export const Header = ({ onSearch }) => {
  const location = useLocation();
  const isDashboardPage = location.pathname === "/dashboard";
  const isUsuariosPage = location.pathname === "/usuarios";
  const isEmpresasPage = location.pathname === "/empresas";
  const isEstudiosPage = location.pathname === "/estudios-seguridad";
  const isAdversosPage = location.pathname === "/gestion-adversos";
  const isPoligrafiaPage = location.pathname === "/gestion-poligrafia";
  const isSeleccionPage = location.pathname === "/seleccion";
  const isVisitasPage = location.pathname === "/gestion-visitas";
   
  // Estado para el drawer
  const [openUsuario, setOpenUsuario] = useState(false);
  const [openEmpresa, setOpenEmpresa] = useState(false);
  const [openAdversos, setOpenAdversos] = useState(false);
  const showDrawerUsuario = () => setOpenUsuario(true);
  const onCloseUsuario = () => setOpenUsuario(false);
  const showDrawerEmpresa = () => setOpenEmpresa(true);
  const onCloseEmpresa = () => setOpenEmpresa(false);
  const showDrawerAdversos = () => setOpenAdversos(true);
  const onCloseAdversos = () => setOpenAdversos(false);


  return (
    <div className="h-[10%] w-full flex justify-between items-end">
      {/* Componente de la etiqueta de bienvenida */}
      {isDashboardPage ? (
        <h3 className="negro font-[700] w-[26.2%]">Hola, Bienvenido a USS</h3>
      ) : null}

      {/* Componentes de filtros */}
      {isEstudiosPage ? (
        <div className="flex items-center gap-[2%] w-[90%]">
          <FiltroEmpresa />
          <FiltroCargo />
          <RangoFecha />
          
          {/* Componente boton */}
          <NuevoEstudio />
        </div>
      ) : null}

      {/* Componentes de los botones */}
      {isUsuariosPage ? (
        <CrearUsuario onClick={showDrawerUsuario} />
      ) : null}
      {isEmpresasPage ? (
        <CrearEmpresa onClick={showDrawerEmpresa} />
      ) : null}
      {isAdversosPage ? (
        <NuevoAdverso onClick={showDrawerAdversos} />
      ) : null}
      {isPoligrafiaPage ? (
        <NuevaPoligrafia />
      ) : null}
      {isSeleccionPage ? (
        <NuevaSeleccion />
      ) : null}
      {isVisitasPage ? (
        <NuevaVisita />
      ) : null}

      {/* Componente de la barra de búsqueda y notificaciones */}
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
      {/* Drawer de Nuevo Adversos */}
      <NuevoAdversoDrawer
        openAdversos={openAdversos}
        onCloseAdversos={onCloseAdversos}
      />
    </div>
  );
};

export default Header;
