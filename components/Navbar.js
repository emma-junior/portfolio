import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../assets/my-logo-white.png";

const Navbar = ({ showMenu, hamBurger }) => {
  const style = {
    btn: "before:block before:mb-[8px] before:w-[32px] before:h-[3px] before:bg-white before:rounded-lg after:block after:w-[32px] after:h-[3px] after:mt-[8px] after:bg-white  after:rounded-lg before:transition before:ease-in-out before:duration-300 after:transition after:ease-in-out after:duration-300",
  };

  return (
    <div className="flex w-10/12 justify-between mx-auto h-16 items-center">
      <Link href="/">
        <Image src={logo} width={120} height={40} alt="" />
      </Link>
      <p onClick={showMenu} className="cursor-pointer">
        <button
          className={`${style.btn} transition ease-in-out duration-300`}
          ref={hamBurger}
        />
      </p>
    </div>
  );
};

export default Navbar;
