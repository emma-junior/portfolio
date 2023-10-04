import React, { useEffect } from "react";
import { main, others } from "../data/main";
import MainCard from "./MainCard";
import { useGlobalContext } from "../hooks/context";

const Projects = () => {
  const { setActive } = useGlobalContext();
  useEffect(() => {
    setActive("work");
  }, []);
  return (
    <div className="lg:fixed left-[45%] lg:overflow-y-scroll lg:h-full mx-5 lg:mx-10 lg:py-20 lg:px-6 lg:w-inherit scroll ">
      <p className="font-semibold text-[#777778] my-5">FEATURED</p>
      <div className="grid grid-cols-1 gap-3 container">
        {main.map((project) => (
          <MainCard key={project.id} project={project} boxheight="h-52" />
        ))}
      </div>
      <p className="font-semibold text-[#777778] mt-12 mb-5">OTHERS</p>
      <div className="lg:grid grid-cols-2 gap-2 pb-36 container">
        {others.map((project) => (
          <MainCard key={project.id} project={project} boxheight="h-72" />
        ))}
      </div>
    </div>
  );
};

export default Projects;
