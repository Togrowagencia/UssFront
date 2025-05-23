import React from "react";
import "./styles/styles.css";

const Checkbox = ({ label }) => {
  return (
    <div className="flex flex-col ">
      <div className="checkbox-wrapper-46">
        <input type="checkbox" id="cbx-46" class="inp-cbx" />
        <label for="cbx-46" class="cbx">
        <span>
          <svg viewBox="0 0 12 10" height="10px" width="12px">
            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
          </svg>
        </span>
        <span>{label}</span>
        </label>
      </div>
    </div>
  );
};

export default Checkbox;
