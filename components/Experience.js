import React from "react";
import { experience } from "../data/main";

const Experience = () => {
  return (
    <section>
      <h2 className="text-white text-[15px] font-medium">WORK EXPERIENCE</h2>
      <div className="space-y-5">
        {experience.map((exp, index) => {
          return (
            <div key={index}>
              <div className="my-3">
                <h2 className="text-[#dad8d8] ">
                  {exp.company} - {exp.role}
                </h2>
                <p className="text-[#777778] text-xs">{exp.date}</p>
              </div>
              <p className="text-[#777778] ">{exp.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
