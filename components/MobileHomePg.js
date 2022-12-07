import React from "react";
import MobileHomeContent from "./MobileHomeContent";
import Dropdown from "./Dropdown";
import Navbar from "./Navbar";
import { useGlobalContext } from "../hooks/context";

const MobileHomePg = () => {
  const { dropdown } = useGlobalContext();
  return (
    <div className="bg-[#151515] min-h-screen text-white">
      <Navbar />
      {!dropdown ? <MobileHomeContent /> : <Dropdown />}
    </div>
  );
};

export default MobileHomePg;
