import React from "react";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import { projects_arr } from "../../constant/constant";
import FeaturedProject from "../../components/FeaturedProject/FeaturedProject";
import ProjectItem from "../../components/ProjectItem/ProjectItem";
import { motion } from "framer-motion";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import { fadeIn, slideIn } from "../../utils/motion";

const gridStyle = {
  display: "grid",
  gap: "15px",
  margin: "20px 0px 0px",
};
const Projects = () => {
  return (
    <div className="">
      <SectionHeading title="Some Things I've Built" index="03. " />
      <div className="my-10">
        {projects_arr.slice(0, 3).map((project, i) => (
          <FeaturedProject
            key={project.project_name}
            project={project}
            index={i}
          />
        ))}
      </div>
      <div className="text-center tracking-wider">
        <h1 className="text-headingColor text-3xl font-bold">
          Other Noteworthy Projects
        </h1>
        <p className="text-base text-btnColor my-4 mt-2">view the archieve</p>
      </div>
      <ul
        style={gridStyle}
        className="lg:grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] grid gap-[15px] mt-[20px] mx-0"
      >
        {projects_arr.slice(3, 9).map((project, i) => (
          <motion.li
            key={project.project_name}
            whileHover={{
              scale: 1.05,
              transition: { ease: "easeOut", duration: 0.2 },
            }}
            variants={fadeIn("right", "spring", 0.5 * i, 0.75)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}            className="bg-boxColor p-8 tracking-wider  group cursor-pointer rounded-lg hover:shadow-lg h-full w-full"
            href={project.preview}
          >
            <ProjectItem project={project} />
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default SectionWrapper(Projects, "projects");
