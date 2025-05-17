import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Styles/Styles.css";

export const Sidebar = () => {
  const navigate = useNavigate();
  const [isCollapsed, setIsCollapsed] = useState(() => {
    const savedState = localStorage.getItem("sidebarCollapsed");
    return savedState === "true";
  });

  const location = useLocation();

  const getSelectedLink = (path) => {
    switch (path) {
      case "/dashboard":
        return location.pathname === path
          ? "selected-dashboard"
          : "unselected-dashboard";
      case "/usuarios":
        return location.pathname === path
          ? "selected-dashboard"
          : "unselected-dashboard";
      case "/empresas":
        return location.pathname === path
          ? "selected-dashboard"
          : "unselected-dashboard";
      case "/estudiosseguridad":
        return location.pathname === path
          ? "selected-dashboard"
          : "unselected-dashboard";
      case "/gestion-adversos":
        return location.pathname === path
          ? "selected-dashboard"
          : "unselected-dashboard";
      case "/gestion-poligrafia":
        return location.pathname === path
          ? "selected-dashboard"
          : "unselected-dashboard";
      case "/gestion-visitas":
        return location.pathname === path
          ? "selected-dashboard"
          : "unselected-dashboard";
      case "/seleccion":
        return location.pathname === path
          ? "selected-dashboard"
          : "unselected-dashboard";
      default:
        return "";
    }
  };

  const getColor = (path) => {
    return location.pathname === path ? "#FF7F00" : "#5A5DA6";
  };

  const toggleSidebar = () => {
    const newState = !isCollapsed;
    setIsCollapsed(newState);
    localStorage.setItem("sidebarCollapsed", newState);
  };

  useEffect(() => {
    const savedState = localStorage.getItem("sidebarCollapsed");
    setIsCollapsed(savedState === "true");
  }, []);

  return (
    <div className={`sidebar ${isCollapsed ? "sidebar-hidden" : ""}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="41"
        height="45"
        viewBox="0 0 41 45"
        fill="none"
        className="comprimir-button"
        onClick={toggleSidebar}
      >
        <g filter="url(#filter0_dddd_14_658)">
          <circle cx="22" cy="18" r="17" fill={getColor(location.pathname)} />
          <path
            d="M25.9371 26.511C26.3434 26.0141 26.27 25.282 25.7732 24.8757L19.2855 19.57C18.879 19.2375 18.6459 18.7461 18.6459 18.2216C18.6459 17.6971 18.879 17.2056 19.2855 16.8732L25.7732 11.5674C26.927 10.5544 25.5338 8.83567 24.3018 9.76827L17.8141 15.074C15.8401 16.6205 15.8394 19.8227 17.8141 21.3691L24.3018 26.6749C24.5177 26.8514 24.778 26.9374 25.0368 26.9374C25.3734 26.9374 25.7074 26.7919 25.9371 26.511Z"
            fill="white"
          />
        </g>
        <defs>
          <filter
            id="filter0_dddd_14_658"
            x="0"
            y="0"
            width="41"
            height="45"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="0.5" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_14_658"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="-1" dy="2" />
            <feGaussianBlur stdDeviation="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"
            />
            <feBlend
              mode="normal"
              in2="effect1_dropShadow_14_658"
              result="effect2_dropShadow_14_658"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="-1" dy="4" />
            <feGaussianBlur stdDeviation="1.5" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
            />
            <feBlend
              mode="normal"
              in2="effect2_dropShadow_14_658"
              result="effect3_dropShadow_14_658"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="-2" dy="7" />
            <feGaussianBlur stdDeviation="1.5" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"
            />
            <feBlend
              mode="normal"
              in2="effect3_dropShadow_14_658"
              result="effect4_dropShadow_14_658"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect4_dropShadow_14_658"
              result="shape"
            />
          </filter>
        </defs>
      </svg>

      <img
        src={`${
          isCollapsed ? "/images/logo-solo.png" : "/images/logo-sidebar.png"
        }`}
        className={`logo-sidebar`}
      />

      <div className="w-full items-start justify-start flex h-[10%]">
        <div className="datos-perfil-sidebar">
          <h4 className="negro">Esteban Jaramillo</h4>
          <p className="textos gris4">Admin</p>
        </div>
      </div>

      <div className="content-sidebar">
        <Link to="/dashboard" className={getSelectedLink("/dashboard")}>
          <img src="/svg/sidebar/dashboard.svg" className="noselected-img" />
          <img
            src="/svg/sidebar/dashboard-selected.svg"
            className="selected-img"
          />
          <h4>Dashboard</h4>
        </Link>

        <Link to="/usuarios" className={getSelectedLink("/usuarios")}>
          <img src="/svg/sidebar/usuarios.svg" className="noselected-img" />
          <img
            src="/svg/sidebar/usuarios-selected.svg"
            className="selected-img"
          />
          <h4>Usuarios</h4>
        </Link>

        <Link to="/empresas" className={getSelectedLink("/empresas")}>
          <img src="/svg/sidebar/empresas.svg" className="noselected-img" />
          <img
            src="/svg/sidebar/empresas-selected.svg"
            className="selected-img"
          />
          <h4>Empresas</h4>
        </Link>

        <Link
          to="/estudiosseguridad"
          className={getSelectedLink("/estudiosseguridad")}
        >
          <img
            src="/svg/sidebar/estudiosseguridad.svg"
            className="noselected-img"
          />
          <img
            src="/svg/sidebar/estudiosseguridad-selected.svg"
            className="selected-img"
          />
          <h4>Estudios de Seguridad</h4>
        </Link>

        <Link
          to="/gestion-adversos"
          className={getSelectedLink("/gestion-adversos")}
        >
          <img src="/svg/sidebar/gestion.svg" className="noselected-img" />
          <img
            src="/svg/sidebar/gestion-selected.svg"
            className="selected-img"
          />
          <h4>Gestión de Adversos</h4>
        </Link>

        <Link
          to="/gestion-poligrafia"
          className={getSelectedLink("/gestion-poligrafia")}
        >
          <img src="/svg/sidebar/gestion.svg" className="noselected-img" />
          <img
            src="/svg/sidebar/gestion-selected.svg"
            className="selected-img"
          />
          <h4>Gestión de poligrafía</h4>
        </Link>

        <Link
          to="/gestion-visitas"
          className={getSelectedLink("/gestion-visitas")}
        >
          <img
            src="/svg/sidebar/gestionvistas.svg"
            className="noselected-img"
          />
          <img
            src="/svg/sidebar/gestionvisitas-selected.svg"
            className="selected-img"
          />
          <h4>Gestión de visitas</h4>
        </Link>

        <Link to="/seleccion" className={getSelectedLink("/seleccion")}>
          <img src="/svg/sidebar/seleccion.svg" className="noselected-img" />
          <img
            src="/svg/sidebar/seleccion-selected.svg"
            className="selected-img"
          />
          <h4>Selección</h4>
        </Link>
      </div>

      <div className="flex flex-col w-full h-[19vh] gap-[2%] justify-end items-center">
        <Link to="/" className="flex items-center justify-start w-full gap-[2.5%]">
          <img src="/svg/sidebar/cerrar.svg" />
          <h4 className="rojo">Cerrar Sesión</h4>
        </Link>

        <div className="flex justify-start items-center w-full">
          <img src="/images/logo-togrow.png" alt="" />
          <h4 className="text-[#999]">Develop by ToGrow</h4>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
