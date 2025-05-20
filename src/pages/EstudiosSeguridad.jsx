import React, { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Banner from "@/components/Banners";
import Tabla from "@/components/EstudiosSeguridad";


const EstudiosSeguridad = () => {
  const [search, setSearch] = useState("");
  const onSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="flex w-[100%] h-[99.9vh]">
      <Sidebar />
      <div className="-ml-[4%] w-[84%] h-full z-[2] rounded-l-[54px] bg-white px-[3.5%] transition-[width] duration-500 ease-linear sombra">
        <Header onSearch={onSearch} />
        <div className="w-full h-[87%] my-[1.9%]">
          <Banner title="ESTUDIOS DE SEGURIDAD" />
          <Tabla />
        </div>
      </div>
    </div>
  );
};

export default EstudiosSeguridad;
