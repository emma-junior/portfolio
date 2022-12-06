import React from "react";
import Bio from "./Bio";
import Socials from "./Socials";
import Section from "./Section";

const Emma = () => {
  return (
    <section className="fixed top-20 w-4/12">
      <h2 className="text-[47px] font-semibold font-monospace leading-[50px] text-white">
        Hello, I'm Emmanuel Eze
      </h2>
      <Bio />
      <div className="space-y-5 my-12">
        <Section num="00" type="work" />
        <Section num="01" type="resume" />
        <Section num="02" type="articles" />
      </div>
      <Socials />
      <p className="text-[#777778] text-xs my-6">
        Inspired by{" "}
        <a
          href="https://www.sarahdayan.dev/"
          target="_blank"
          rel="noreferrer"
          className="text-white cursor-pointer"
        >
          Sarah Dayan
        </a>
      </p>
    </section>
  );
};

export default Emma;
