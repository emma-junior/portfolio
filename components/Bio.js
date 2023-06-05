import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Section from "./Section";
import Socials from "./Socials";
import me from "../assets/photo.jpg";
import Link from "next/link";
import { BsFillCaretRightFill } from "react-icons/bs";
import { useGlobalContext } from "../hooks/context";
import MobileSocials from "./MobileSocials";

const Bio = () => {
  const [cursorX, setCursorX] = useState();
  const [cursorY, setCursorY] = useState();

  useEffect(() => {
    Aos.init({ duration: 3000 });
    window.addEventListener("mousemove", (e) => {
      setCursorX(e.pageX);
      setCursorY(e.pageY);
    });
  }, []);
  const { dropdown } = useGlobalContext();
  return (
    <div className="lg:mt-[70px] lg:ml-12 mb-10 lg:mb-0">
      <div
        className={`flex flex-col items-center justify-center md:h-[80vh] h-[70vh] lg:h-full ${
          dropdown ? "hidden" : "block"
        }`}
      >
        <div className="flex lg:items-center mb-1 lg:mb-5 flex-col">
          <div className="lg:hidden w-32 mx-auto mt-16 mb-4 ">
            <Image className="rounded-full" src={me} alt="" />
          </div>
          <h2 className="text-2xl font-bold text-center lg:text-left lg:text-[52px]  lg:font-monospace lg:leading-[50px] gradientText">
            Hello, I&apos;m Emmanuel Eze.
          </h2>
        </div>
        <div className="lg:pr-[5%] flex text-center lg:text-left md:px-10 px-4 lg:px-0 py-1 lg:py-0 ">
          <p className="text-[#777778] lg:my-3 my-0 text-[15px]">
            I&apos;m a{" "}
            <span data-aos="zoom-in" className="gradientText text-[16px]">
              frontend developer
            </span>
            . I create interactive experiences for amazing people using
            modern&nbsp;
            <span data-aos="zoom-in" className="gradientText text-[16px]">
              web technology
            </span>
            . I&apos;m currently learning how to write immersive web&nbsp;
            <span data-aos="zoom-in" className="gradientText text-[16px]">
              animations
            </span>{" "}
            and also exploring&nbsp;
            <span data-aos="zoom-in" className="gradientText text-[16px]">
              backend
            </span>{" "}
            development
          </p>
        </div>
        <div className="lg:hidden mt-4">
          <Link href="/work">
            <button className="flex bg-[#1b1b1d] h-12 w-32 justify-between items-center px-6 text-base mx-auto rounded-md">
              Explore <BsFillCaretRightFill />
            </button>
          </Link>
        </div>
      </div>
      <div className="hidden lg:block space-y-5 my-12">
        <Section num="00" type="work" />
        <Section num="01" type="blog" />
        {/* <Section num="02" type="resume" /> */}
        <a
          href="/files/resume.pdf"
          target="_blanket"
          rel="noopener"
          className="section"
        >
          <h2 className="text-xs">02</h2>
          <p className="line"></p>
          <h2 className="text-xs">RÉSUMÉ</h2>
        </a>
        <div
          className="absolute left-3 w-[6px] h-[6px] bg-white rounded-full pointer-events-none z-20"
          style={{
            left: cursorX + "px",
            top: cursorY + "px",
          }}
        ></div>
      </div>
      <div className="hidden lg:block">
        <Socials />
      </div>
      <div className="lg:hidden">
        <MobileSocials />
      </div>
      <p className="text-[#777778] text-xs my-4 text-center lg:text-left">
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

export default Bio;
