import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { skills } from "../data/main";

const Skills = () => {
  return (
    <section>
      <h2 className="text-white text-[15px] font-medium my-5">SKILLS</h2>
      <ul className="text-[#777778]">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center">
            <BsArrowRight className="mr-2" />
            {skill.name}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
