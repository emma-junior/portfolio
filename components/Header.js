import React, { useRef } from "react";
import Navbar from "./Navbar";
import Dropdown from "./Dropdown";
import { useGlobalContext } from "../hooks/context";

const Header = () => {
  const { dropdown, setDropdown } = useGlobalContext();
  const hamBurger = useRef();
  const showMenu = () => {
    setDropdown(!dropdown);
    hamBurger.current.classList.toggle("hamburger_active");
  };
  return (
    <div className={`text-white ${dropdown ? "min-h-screen" : "h-full"}`}>
      <Navbar showMenu={showMenu} hamBurger={hamBurger} />
      {dropdown && <Dropdown showMenu={showMenu} />}
    </div>
  );
};

export default Header;
