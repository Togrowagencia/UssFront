import React from "react";

const Banner = ({ title }) => {
  return (
    <div
      className="w-[100%] h-[9.7vh] flex items-center justify-center bg-cover bg-center bg-[url('/images/banners.png')] bg-no-repeat"
    >
      <h2 className="blanco">{title}</h2>
    </div>
  );
};

export default Banner;