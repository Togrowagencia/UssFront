import React from "react";

const Banner = () => {
  return (
    <div className="my-[3%] relative">
      <img src="public/images/banner-dashboard.png" alt="" className="w-full" />
      <div className="absolute w-[38%] top-[22%] left-[6%] text-start">
        <h2 className="blanco">
          DATA USS <br /> Administracion y Gestion
        </h2>
      </div>
    </div>
  );
};

export default Banner;
