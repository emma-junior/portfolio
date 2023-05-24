import React from "react";
import Link from "next/link";

const Navbar = ({ showMenu, hamBurger }) => {
  const style = {
    btn: "before:block before:mb-[8px] before:w-[32px] before:h-[3px] before:bg-white before:rounded-lg after:block after:w-[32px] after:h-[3px] after:mt-[8px] after:bg-white  after:rounded-lg before:transition before:ease-in-out before:duration-300 after:transition after:ease-in-out after:duration-300",
    // active:
    //   "before:translate-y-[7px] before:bg-white before:rotate-45 after:bg-white after:-translate-y-[5px] after:-rotate-45",
  };

  return (
    <div className="flex w-10/12 justify-between mx-auto h-16 items-center">
      <Link href="/">
        <h2 className="text-[28px] font-medium cursor-pointer">E.E</h2>
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
