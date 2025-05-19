import React, { useState } from "react";

export const Buscador = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchText(value);
    onSearch(value);
  };

  return (
    <div
      className={`pb-2 overflow-hidden flex group items-end transition-all duration-500 gap-[4%] ${
        searchText
          ? "w-[100%] border-b border-b-solid border-[#C1C1C1]"
          : "w-[3%] min-w-[40px] hover:w-[100%] hover:border-b hover:border-b-solid hover:border-[#C1C1C1]"
      }`}
    >
      <div className="flex items-center justify-center">
        <img src="/svg/header/buscar.svg" alt="" />
      </div>
      <input
        type="text"
        className="w-full textos negro"
        value={searchText}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default Buscador;
