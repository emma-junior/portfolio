import React from "react";

const Experience = () => {
  const experience = [
    {
      company: "Kobo 360",
      role: "Frontend developer [Intern]",
      date: "FEBRUARY 2022 - NOVEMBER 2022",
      description:
        "I joined Kobo 360 as a frontend developer intern, while learning new skills I also collaborated with other developers in building amazing features, maintaining existing features and contributed in TDD and BDD software testing.",
    },
    {
      company: "Afiari Technologies",
      role: "Frontend developer [Intern]",
      date: "DECEMBER 2021 - MARCH 2022",
      description:
        "I worked closely with a senior engineer to develop the user interfaces for a sophisticated ecommerce web application. During such time i contributed in building complex layouts and components, and also managed app state with Redux and React redux.",
    },
  ];

  return (
    <section>
      <h2 className="text-white text-[15px] font-medium">WORK EXPERIENCE</h2>
      <div className="space-y-5">
        {experience.map((exp, index) => {
          return (
            <div key={index}>
              <div className="my-3">
                <h2 className="text-[#dad8d8]">
                  {exp.company} - {exp.role}
                </h2>
                <p className="text-[#777778] text-xs">{exp.date}</p>
              </div>
              <p className="text-[#777778]">{exp.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
