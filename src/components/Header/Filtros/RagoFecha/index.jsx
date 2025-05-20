import React from "react";
import { useLocation } from "react-router-dom";
import { DatePicker } from "antd";
import "./styles/styles.css";

const { RangePicker } = DatePicker;

const RangoFecha = () => {
  const location = useLocation();
  const isSeleccionPage = location.pathname === "/seleccion";

  return (
    <div className={`flex items-center w-[16.2%] border-b border-[#C1C1C1] mb-[0.3%] ${isSeleccionPage ? 'w-[66%]' : ''}`}>
      <div className="flex items-center ml-[5%]">
        <img src="/svg/filtros/calendario.svg" alt="calendar" />
        <RangePicker placeholder={['', '']} />
      </div>
    </div>
  );
};

export default RangoFecha;


