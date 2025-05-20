import React, { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Banner from "@/components/Banners";
import Tabla from "@/components/ConsolidadoUSS";

const ConsolidadoUSS = () => {
  const [searchText, setSearchText] = useState("");
  const onSearch = (e) => {
    setSearchText(e.target.value);
  };
  
  return (
    <div className="flex w-[100%] h-[99.9vh]">
      <Sidebar />
      <div className="-ml-[4%] w-[77.05%] h-full z-[2] rounded-l-[54px] bg-white px-[3.5%] transition-[width] duration-500 ease-linear sombra">
        <Header onSearch={onSearch} />
        <div className="w-[100%] h-[86%] my-[1.9%]">
          <Banner title="CONSOLIDADO USS" />
          <Tabla />
        </div>
      </div>
    </div>
  );
};

export default ConsolidadoUSS;
