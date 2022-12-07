import React from "react";
import { useGlobalContext } from "../../hooks/context";

const Navbtn = () => {
  const { dropdown } = useGlobalContext();
  return (
    <button
      className="button-three"
      aria-controls="primary-navigation"
      aria-expanded={dropdown}
    >
      <svg
        stroke="var(--button-color)"
        fill="none"
        className="hamburger"
        viewBox="-10 -10 120 120"
        width="50"
      >
        <path
          className="line"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m 20 40 h 60 a 1 1 0 0 1 0 20 h -60 a 1 1 0 0 1 0 -40 h 30 v 70"
        ></path>
      </svg>
    </button>
  );
};

export default Navbtn;
