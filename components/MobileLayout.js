import React from "react";
import Dropdown from "./Dropdown";
import Navbar from "./Navbar";
import { useGlobalContext } from "../hooks/context";

const MobileLayout = ({ children }) => {
  const { dropdown } = useGlobalContext();
  return (
    <div className="bg-[#151515] min-h-screen text-white">
      <Navbar />
      {!dropdown ? <div>{children}</div> : <Dropdown />}
    </div>
  );
};

export default MobileLayout;
