import React from "react";
import { useGlobalContext } from "../../hooks/context";

const Navbtn = () => {
  const { dropdown } = useGlobalContext();
  return (
    <button
      className="button-one"
      aria-controls="primary-navigation"
      aria-expanded={dropdown}
    >
      <svg
        fill="var(--button-color)"
        className="hamburger"
        viewBox="0 0 80 70"
        width="45"
      >
        <rect
          className="line top"
          width="60"
          height="5"
          x="10"
          y="10"
          rx="5"
        ></rect>
        <rect
          className="line middle"
          width="60"
          height="5"
          x="10"
          y="30"
          rx="5"
        ></rect>
        <rect
          className="line bottom"
          width="60"
          height="5"
          x="10"
          y="50"
          rx="5"
        ></rect>
      </svg>
    </button>
  );
};

export default Navbtn;
