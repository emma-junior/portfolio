import React, { useEffect } from "react";
import Link from "next/link";
import Aos from "aos";
import "aos/dist/aos.css";
import { links } from "../data/main";

const Dropdown = ({ showMenu }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="mt-4 md:mt-32" data-aos="fade-down">
      <ul className="text-center my-8 space-y-6 text-[#777778]">
        <li
          onClick={showMenu}
          className="text-2xl max-w-fit mx-auto cursor-pointer hover:text-white"
        >
          <Link href="/">Home</Link>
        </li>
        <li
          onClick={showMenu}
          className="text-2xl max-w-fit mx-auto cursor-pointer hover:text-white"
        >
          <Link href="/work">Work</Link>
        </li>
        <li
          onClick={showMenu}
          className="text-2xl max-w-fit mx-auto cursor-pointer hover:text-white"
        >
          <Link href="/blog">Blog</Link>
        </li>
        <li
          onClick={showMenu}
          className="text-2xl max-w-fit mx-auto cursor-pointer hover:text-white"
        >
          <a href="/files/resume.pdf" target="_blanket" rel="noopener">
            Résumé
          </a>
        </li>
      </ul>
      <div className="">
        <h2 className="text-center text-xl mb-6">Connect With Me</h2>
        <div className="flex space-x-3 w-full justify-center text-xl text-[#777778]">
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
      </div>
    </div>
  );
};

export default Dropdown;
