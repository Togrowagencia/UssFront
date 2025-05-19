import React, { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Banner from "@/components/Dashboard/Banner";
import Accesos from "@/components/Dashboard/Accesos";
import TabsDashboard from "@/components/Dashboard/Tabs";
import Atajos from "@/components/Dashboard/Atajos";

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
          <div className="flex w-full h-[20%]">
            <Accesos />
          </div>
          <div className="flex w-full items-center justify-start my-[2%] gap-[3%]">
            <TabsDashboard />
            <Atajos />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
