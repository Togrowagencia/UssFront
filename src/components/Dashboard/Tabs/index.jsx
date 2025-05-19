import React from "react";
import { Tabs as AntdTabs } from "antd";
import "./styles/styles.css";
import Adversos from "./Adversos";
import Estudios from "./Estudios";
import Poligrafias from "./Poligrafias";

const items = [
  {
    key: "1",
    label: "Adversos Recientes",
    children: (
      <div className="cursor-pointer">
        <Adversos />
      </div>
    ),
  },
  {
    key: "2",
    label: "Estudios recientes",
    children: (
      <div className="cursor-pointer">
        <Estudios />
      </div>
    ),
  },
  {
    key: "3",
    label: "Poligrafías con adjuntos",
    children: (
      <div className="cursor-pointer">
        <Poligrafias />
      </div>
    ),
  },
];

const TabsDashboard = () => {
  return (
    <div className="flex w-[48.6%] h-[42vh] bg-blanco-suave rounded-[10px]">
      <AntdTabs
        defaultActiveKey="1"
        items={items}
        onChange={key => console.log(key)}
        rootClassName="custom-tabs w-full flex items-center justify-center"
      />
    </div>
  );
};

export default TabsDashboard;