import React, { useState } from "react";
import Link from "next/link";
import { useGlobalContext } from "../hooks/context";

const Section = ({ num, type }) => {
  const { active } = useGlobalContext();
  return (
    <>
      <Link href={`/${type}/`}>
        <div className={` ${active === type ? "sectionactive" : "section"}`}>
          <h2 className="text-xs 2xl:text-lg">{num}</h2>
          <p className="line"></p>
          <h2 className="text-xs 2xl:text-lg">{type.toUpperCase()}</h2>
        </div>
      </Link>
    </>
  );
};

export default Section;
