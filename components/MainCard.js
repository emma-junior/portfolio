import React from "react";
import { AiOutlineEye } from "react-icons/ai";
import { FiShare2 } from "react-icons/fi";

const MainCard = ({ project, boxheight }) => {
  return (
    <article
      className={`bg-[#1b1b1d] ${boxheight} min-h-full flex flex-col justify-between my-3 lg:my-0 p-10 lg:even:translate-y-6 relative hover:z-10 cursor-default  hover:scale-105 transition duration-500 `}
    >
      <div>
        <h2 className="text-2xl font-semibold text-white">{project.title}</h2>
        {project.technologies.map((techs, index) => (
          <span key={index} className="text-[#ccc5c5] text-[12px]">
            {techs} {index < project.technologies.length - 1 ? " + " : ""}
          </span>
        ))}
        <p className="text-[#777778] my-3 text-[15px]">{project.desc}</p>
      </div>
      <div className="flex space-x-4">
        <a
          href={project.live}
          target="_blank"
          rel="noreferrer"
          className="text-[#ccc5c5] flex h-5 items-center hover:text-white"
        >
          <AiOutlineEye className="mr-1" /> Live
        </a>
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="text-[#ccc5c5] flex h-5 items-center hover:text-white"
        >
          <FiShare2 className="mr-1" /> Code
        </a>
      </div>
    </article>
  );
};

export default MainCard;
