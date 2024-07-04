import React from "react";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import { textVariant } from "../../utils/motion";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className=" flex flex-col gap-6 items-start p-0 ">
      <motion.p
        variants={textVariant()}
        className="text-base text-btnColor tracking-widest"
      >
        Hi, my name is
      </motion.p>
      <div className="sm:text-7xl text-4xl font-bold">
        <motion.h1 variants={textVariant()} className="   text-headingColor">
          Salman Nawaz.
        </motion.h1>
        <motion.h2 variants={textVariant()} className="text-bodyColor   ">
          I build things for the web.
        </motion.h2>
      </div>
      <motion.p
        variants={textVariant()}
        className=" text-bodyColor lg:text-lg text-sm md:tracking-wide tracking-normal  mb-4 w-[60%] med:w-[100%]"
      >
        I’m a <span className="text-btnColor">full-stack developer</span> specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on creating accessible, user-centered web applications.
      </motion.p>
      <motion.div variants={textVariant()} className="">
        <a
          href="https://drive.google.com/file/d/1c6LpkiaSpe82L8VpeQfXO1bvq_3eM1E-/view"
          className="red-btn text-xs p-4"
          target="_blank"
        >
          Check out my resume
        </a>
      </motion.div>
    </div>
  );
};
// </section>

export default SectionWrapper(Hero, "home");
