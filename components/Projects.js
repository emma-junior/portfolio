import React from "react";
import { main, others } from "../data/main";
import MainCard from "./MainCard";

const Projects = () => {
  return (
    <div className="lg:fixed lg:overflow-y-scroll lg:h-full lg:mx-10 lg:py-20 lg:px-6 scroll ">
      <p className="font-semibold text-[#777778] my-5">FEATURED</p>
      <div className="grid grid-cols-1 gap-2">
        {main.map((project) => (
          <MainCard key={project.id} project={project} boxheight="h-52" />
        ))}
      </div>
      <p className="font-semibold text-[#777778] mt-12 mb-5">OTHERS</p>
      <div className="lg:grid grid-cols-2 gap-2 pb-36">
        {others.map((project) => (
          <MainCard key={project.id} project={project} boxheight="h-72" />
        ))}
      </div>
    </div>
  );
};

export default Projects;
