import React from "react";
import Header from "../components/Header";
import Bio from "../components/Bio";

const Layout = ({ children, home, active }) => {
  return (
    <React.Fragment>
      <div
        className={`lg:h-full lg:overflow-hidden h-auto ${
          home ? "h-full" : ""
        }`}
      >
        <div className="lg:hidden flex flex-col justify-between px-[5%] h-full">
          <Header />
          <div className="relative ">{home ? <Bio /> : children}</div>
        </div>
        <div className="flex bg-[#161616] min-h-screen desk_layout">
          <div className="w-4/12 m-auto ">
            <Bio />
          </div>
          <div className="w-6/12 mx-auto">{children}</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Layout;
