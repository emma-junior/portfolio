import React from "react";
import { links } from "../data/main";

const MobileSocials = () => {
  return (
    <>
      <div className="flex space-x-10 md:space-x-16 w-full justify-center ">
        {links.map((link, index) => {
          return (
            <>
              <a
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="text-xl cursor-pointer"
                key={index}
              >
                {link.icon}
              </a>
            </>
          );
        })}
      </div>
      <p className="text-[#777778] text-xs my-3 text-center lg:text-left">
        Inspired by <span className="text-white">kadetXx</span>
      </p>
    </>
  );
};

export default MobileSocials;
