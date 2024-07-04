import React from "react";
import { social_links } from "../../constant/constant";
import { motion } from "framer-motion";
import { slideIn } from "../../utils/motion";
const social_media_list = () => {
  return (
    <div className="flex md:flex-col gap-6">
      {social_links.map((item) => (
        <div key={item.name}>
          <a href={item.link} target="_blank" rel="noopener noreferrer">
            <item.Icon className="text-bodyColor text-xl hover:text-headingColor" />
          </a>
        </div>
      ))}
    </div>
  );
};

const email_link = () => {
  return (
    <a
      href="mailto:salmannawaz008@gmail.com"
      className="text-bodyColor text-sm tracking-wider writing-mode-vertical-rl"
      target="_blank"
      rel="noreferrer"
    >
      salmannawaz008@gmail.com
    </a>
  );
};
const components = [social_media_list, email_link];

const Footer = () => {
  return (
    <div className="flex flex-col items-center gap-6">
      {components.map((Component, index) => (
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={index===0?slideIn("left", "tween,0.6,1"):slideIn("right", "tween,0.6,1")}
          className={`md:fixed md:bottom-0 ${
            index === 0
              ? "md:left-[40px] md:right-auto"
              : "md:right-[40px] md:left-auto med:hidden"
          }  md:w-[40px] xs:pt-8 z-10`}
        >
          <div className="flex flex-col items-center gap-8 justify-center">
            <Component key={index} />
            <hr className="w-[1px] h-[5rem] bg-bodyColor md:block hidden" />
          </div>
        </motion.div>
      ))}
      <p className="text-bodyColor text-sm pb-4">
        Designed & Built By Salman Nawaz
      </p>
    </div>
  );
};

export default Footer;
