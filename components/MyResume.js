import React from "react";
import axios from "axios";
import fileDownload from "js-file-download";
import { BsLinkedin } from "react-icons/bs";
import { FaDownload } from "react-icons/fa";
import Experience from "./Experience";
import Skills from "./Skills";
import Link from "next/link";

const MyResume = () => {
  const download = () => {
    axios({
      url: "https://emma-resume-download.onrender.com",
      method: "GET",
      responseType: "blob",
    }).then((res) => {
      console.log(res);
      fileDownload(res.data, "emmanuel-eze-resume.pdf");
    });
  };

  return (
    <section className="lg:pt-20 lg:mx-10 lg:pb-28 lg:fixed lg:overflow-y-scroll lg:h-full scroll">
      <section className="bg-[#262627] p-7 ">
        <div className="text-white flex w-full justify-between">
          <h2 className="lg:text-3xl text-2xl">EMMANUEL EZE</h2>
          <div className="flex space-x-2">
            <a
              className="flex h-7 lg:h-5 items-center text-xs cursor-pointer"
              href="https://www.linkedin.com/in/eze-emmanuel-355897237"
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin className="text-xl lg:text-xs" />
              <p className="hidden lg:block">Linkedin</p>
            </a>
            <div
              className="flex h-7 lg:h-5 items-center text-xs cursor-pointer"
              onClick={download}
            >
              <FaDownload className="text-xl lg:text-xs" />
              <p className="hidden lg:block">Download</p>
            </div>
          </div>
        </div>
        <h2 className="text-[#dad8d8]">Frontend Developer</h2>
        <p className="my-5 text-[#777778]">
          I’m a dedicated and highly motivated frontend software developer with
          2+ years of experience in Front-End development. I’m passionate about
          web development, thus the reason for my ever increasing desire to keep
          on learning and improving in such a field.
        </p>
        <Experience />
        <Skills />
        <h2 className="text-white text-[15px] font-medium mt-5 mb-3">
          PROJECTS
        </h2>
        <p className="text-[15px] text-[#777778]">
          Links to my works can be found on{" "}
          <Link href="/work" className="">
            <span className="text-white cursor-pointer">
              emmatechy.vercel.app/work
            </span>
          </Link>{" "}
          and more details can be provided upon request
        </p>
      </section>
    </section>
  );
};

export default MyResume;
