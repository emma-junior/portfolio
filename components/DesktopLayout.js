import React from "react";
import Emma from "./Emma";

const DesktopLayout = ({ children }) => {
  return (
    <main className="flex bg-[#161616] min-h-screen">
      <span className="w-4/12 m-auto">
        <Emma />
      </span>
      <span className="w-6/12 mx-auto">{children}</span>
    </main>
  );
};

export default DesktopLayout;
