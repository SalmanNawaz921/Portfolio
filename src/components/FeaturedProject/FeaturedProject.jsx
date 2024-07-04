import { BsBoxArrowUpRight } from "react-icons/bs";
import { FiGithub } from "react-icons/fi";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { fadeIn } from "../../utils/motion";

const FeaturedProject = ({ project, index }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getContentClasses = () => {
    if (index % 2 === 0) {
      return windowWidth < 768
        ? "col-start-1 -col-end-1"
        : windowWidth < 1080
        ? "col-start-5 -col-end-1"
        : "col-start-7 -col-end-1";
    }
    return windowWidth < 768
      ? "col-start-1 -col-end-1"
      : "col-start-1 col-end-7";
  };

  const getImageClasses = () => {
    if (index % 2 === 0) {
      return windowWidth >= 768
        ? "col-start-1 col-end-8"
        : "col-start-1 -col-end-1";
    } else {
      return windowWidth >= 768
        ? "col-start-6 -col-end-1"
        : "col-start-1 -col-end-1";
    }
  };

  return (
    <motion.div
      className="mb-[100px] md:mb-[70px]  relative grid gap-[10px] grid-cols-[repeat(12,1fr)] items-center"
      variants={fadeIn("up", "spring", 0.5 * index, 0.75)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div
        className={`flex flex-col
        justify-start relative items-start  gap-2 z-[2] row-start-1 -row-end-1 ${
          windowWidth < 768 && "py-[40px] px-[20px]"
        } ${getContentClasses()} `}
      >
        <p
          className={`text-base text-btnColor ${
            index % 2 === 0 && windowWidth >= 768 ? "text-right" : "text-left"
          } w-full`}
        >
          Featured Project
        </p>
        <h1
          className={`text-btnColor text-4xl font-bold mb-2  ${
            index % 2 === 0 && windowWidth >= 768 ? "text-right" : "text-left"
          }   p-2 w-full`}
        >
          <a href={project.preview} target="_blank">
            {project.project_name}
          </a>
        </h1>
        <p className="text-bodyColor text-lg mb-4 md:bg-boxColor bg-transparent md:p-6 p-2">
          {project.description}
        </p>
        <div
          className={`flex flex-wrap  mb-4 gap-[0.2rem] ${
            index % 2 !== 0 || windowWidth < 768
              ? "justify-start"
              : "justify-end"
          } px-2`}
        >
          {project.technologies_used.map((tech, index) => (
            <span
              key={index}
              className=" bg-bodyColor text-btnColor rounded-lg px-2 py-1 whitespace-nowrap text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        <div
          className={`flex gap-4 items-center ${
            index % 2 !== 0 || windowWidth < 768
              ? "justify-start"
              : "justify-end"
          } px-2 w-full`}
        >
          <a
            href={project.github}
            className="text-headingColor hover:text-blue-300"
            target="_blank"
            rel="noreferrer"
          >
            <FiGithub />
          </a>
          <a
            href={project.preview}
            className="text-headingColor hover:text-blue-300"
            target="_blank"
            rel="noreferrer"
          >
            <BsBoxArrowUpRight />
          </a>
        </div>
      </div>
      <div
        className={`md:opacity-100  opacity-[0.25] relative row-start-1 -row-end-1 ${getImageClasses()} h-full`}
      >
        <a className="md:h-auto h-full projBackground" href={project.preview}>
          <img
            src={project?.img}
            alt="Project Image"
            className="w-full  md:h-auto h-full filter  grayscale-[60%] contrast-[1]  hover:filter-none"
          />
        </a>
      </div>
    </motion.div>
  );
};

export default FeaturedProject;
