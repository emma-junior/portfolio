import React from "react";
import Image from "next/image";
import me from "../assets/photo.jpg";
import { BsGithub, BsArrowUpRight, BsLinkedin } from "react-icons/bs";

const Socials = () => {
  return (
    <>
      <main className="flex space-x-4">
        <div className="w-10">
          <Image
            className="rounded-full object-cover"
            height="50"
            width="50"
            src={me}
            alt=""
          />
        </div>
        <a
          href="https://github.com/emma-junior"
          target="_blank"
          rel="noreferrer"
          className="text-[#ccc5c5] flex h-12 items-center text-xs 2xl:text-lg hover:text-white"
        >
          <BsGithub className="mr-2" /> Github{" "}
          <BsArrowUpRight className="ml-2" />
        </a>
        <a
          href="https://www.linkedin.com/in/eze-emmanuel-355897237"
          target="_blank"
          rel="noreferrer"
          className="text-[#ccc5c5] flex h-12 items-center text-xs 2xl:text-lg hover:text-white"
        >
          <BsLinkedin className="mr-2" /> Linkedin{" "}
          <BsArrowUpRight className="ml-2" />
        </a>
        <a
          href="mailto:emma.c.techy@gmail.com"
          className="text-[#ccc5c5] flex h-12 items-center text-xs 2xl:text-lg hover:text-white"
        >
          <p className="mr-1">@</p>
          <p>Email</p> <BsArrowUpRight className="ml-2" />
        </a>
      </main>
      <p className="text-[#777778] text-xs 2xl:text-lg my-3 text-center lg:text-left">
        Inspired by <span className="text-white">kadetXx</span>
      </p>
    </>
  );
};

export default Socials;
