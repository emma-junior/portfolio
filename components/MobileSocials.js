import React from "react";
import { links } from "../data/main";

const MobileSocials = () => {
  return (
    <div className="flex space-x-10 md:space-x-16 w-full justify-center mt-7">
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
  );
};

export default MobileSocials;
