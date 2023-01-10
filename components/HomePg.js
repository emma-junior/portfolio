import React, { useEffect } from "react";
import Emma from "./Emma";
import Projects from "./Projects";
import { useGlobalContext } from "../hooks/context";

const HomePg = () => {
  const { setActive } = useGlobalContext();
  useEffect(() => {
    setActive("work");
  }, []);
  return (
    <main className="flex bg-[#161616] min-h-screen">
      <span className="w-4/12 m-auto">
        <Emma />
      </span>
      <span className="w-6/12 mx-auto">
        <Projects />
      </span>
    </main>
  );
};

export default HomePg;
