import React from "react";
import Image from "next/image";
import me from "../assets/photo.jpg";
import Bio from "./Bio";
import { BsFillCaretRightFill } from "react-icons/bs";
import Link from "next/link";
import { links } from "../data/main";

const MobileHomeContent = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div className="w-32 mx-auto mt-16 mb-4">
        <Image className="rounded-full" src={me} alt="" />
      </div>
      <h2 className="text-3xl font-meduim text-center text-white">
        Hi, I&apos;m Emmanuel Eze.
      </h2>
      <div className="text-center">
        <Bio />
      </div>
      <Link href="/work">
        <button className="flex bg-[#1b1b1d] h-12 w-32 justify-between items-center px-6 text-base mx-auto rounded-md">
          Explore <BsFillCaretRightFill />
        </button>
      </Link>
      <div className="flex space-x-4 w-full justify-center mt-7">
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
      <p className="text-[#777778] text-xs my-4 text-center">
        Inspired by&nbsp;
        <a
          href="https://www.sarahdayan.dev/"
          target="_blank"
          rel="noreferrer"
          className="text-white cursor-pointer"
        >
          Sarah Dayan
        </a>
      </p>
    </div>
  );
};

export default MobileHomeContent;
