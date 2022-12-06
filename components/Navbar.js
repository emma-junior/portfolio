import React from "react";
// import { RiBarChartHorizontalLine } from "react-icons/ri";
// import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../hooks/context";
import Navbtn from "./navbtn/Navbtn";

const Navbar = () => {
  const { dropdown, setDropdown } = useGlobalContext();
  return (
    <div className="flex w-11/12 justify-between mx-auto h-16 items-center">
      <h2 className="text-[28px] font-medium">EmmaTechy</h2>
      <p
        onClick={() => setDropdown(!dropdown)}
        className="text-3xl mt-2 cursor-pointer"
      >
        <Navbtn />
      </p>
    </div>
  );
};

export default Navbar;
