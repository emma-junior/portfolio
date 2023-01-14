import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Bio = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <div>
      <p className="text-[#777778] my-6 text-[15px]">
        I&apos;m a{" "}
        <span data-aos="zoom-in" className="text-white">
          frontend developer
        </span>
        . I create interactive experiences for amazing people using modern&nbsp;
        <span data-aos="zoom-in" className="text-white">
          web technology
        </span>
        . I&apos;m currently learning how to write immersive web&nbsp;
        <span data-aos="zoom-in" className="text-white">
          animations
        </span>{" "}
        and also exploring&nbsp;
        <span data-aos="zoom-in" className="text-white">
          backend
        </span>{" "}
        development
      </p>
    </div>
  );
};

export default Bio;
