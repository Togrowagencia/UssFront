import React from "react";

const Textarea = ({ label, required = false, className = "", placeholder = "" }) => {
  return (
    <div className="mb-[1.5%]">
      <label htmlFor="textarea">
        <h4 className="mb-[1%] mt-[1.5%]">
          {label} {required && " *"}
        </h4>
      </label>
      <textarea
        id="textarea"
        className={`textos negro py-[2.4%] px-[1.8%] border border-[#F5F5F5] rounded-[10px] bg-blanco-suave focus:outline-none ${className}`}
        placeholder={placeholder}
      ></textarea>
    </div>
  );
};

export default Textarea;