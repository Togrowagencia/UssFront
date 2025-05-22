import React, { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Banner from "@/components/Dashboard/Banner";
import Accesos from "@/components/Dashboard/Accesos";
import TabsDashboard from "@/components/Dashboard/Tabs";
import Atajos from "@/components/Dashboard/Atajos";
import TablaPoligrafia from "@/components/Dashboard/TablaPoligrafia";
import TablaVisitador from "@/components/Dashboard/Atajos/TablaVisitador";
import NuevaVisita from "@/components/Dashboard/Atajos/NuevaVisita";
import Tabla from "@/components/Dashboard/TablaVisitas";
const Dashboard = () => {
  const [searchText, setSearchText] = useState("");

  const onSearch = (value) => {
    setSearchText(value);
  };

  return (
    <div className="flex w-[100%] h-[99.9vh]">
      <Sidebar />
      <div className="-ml-[4%] w-[84%] h-full z-[2] rounded-l-[54px] bg-white px-[3.5%] transition-[width] duration-500 ease-linear sombra">
        <Header onSearch={onSearch} />
        <Banner />

        <div className="flex flex-col w-full">
          {/* Rol admin */}
          <div className="flex w-full h-[20%]">
            <Accesos />
          </div>
          <div className="flex w-full items-center justify-start my-[2%] gap-[3%]">
            <div className="flex w-[48.6%] h-[42vh] bg-blanco-suave rounded-[10px]">
              <TabsDashboard />
            </div>
            <div className="flex w-[48.6%] h-[42vh]">
              <Atajos />
            </div>
          </div>
          {/* End Rol admin */}

          {/* Rol poligrafista */}
          {/*<div className="flex w-full h-[12vh]">
            <Atajos />
          </div>
          <div className="flex flex-col w-full h-[42vh]">
            <h4 className="gris">Ultimas Poligrafías</h4>
            <TablaPoligrafia />
          </div>*/}
          {/* End Rol poligrafista */}

          {/* Rol visitador */}
          {/*<div className="flex w-full h-full flex-col ">
            <div className="flex w-full gap-[1%]">
              <TablaVisitador />
              <NuevaVisita />
            </div>
            <div className="flex flex-col w-full h-[42vh] mt-[4%]">
              <h4 className="gris">Ultimas Visitas</h4>
              <Tabla />
            </div>
          </div>
          {/* End Rol visitador */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
