import { BsBoxArrowUpRight } from "react-icons/bs";
import { FiGithub } from "react-icons/fi";
import { CiFolderOn } from "react-icons/ci";
import { motion } from "framer-motion";

const ProjectItem = ({ project}) => {
  return (

      <motion.a href={project.preview} target="_blank">
        <motion.div className="flex mb-6 justify-between">
          <CiFolderOn className="text-btnColor text-5xl" />
          <div className="text-xl text-headingColor flex items-center gap-2 ">
            <a
              href={project.github}
              target="_blank"
              className="hover:text-btnColor"
            >
              <FiGithub />
            </a>
            <a
              href={project.preview}
              target="_blank"
              className="hover:text-btnColor"
            >
              <BsBoxArrowUpRight className="mb-2" />
            </a>
          </div>
        </motion.div>
        <div className="">
          <h1 className="mb-2 text-2xl text-headingColor font-bold group-hover:text-btnColor">
            {project.project_name}
          </h1>
          <p className="text-sm text-bodyColor">{project.description}</p>

          <ul className="text-[12px] text-bodyColor flex flex-wrap gap-2 opacity-[75%]   mt-4">
            {project.technologies_used.map((tech) => (
              <li key={tech} className=" whitespace-nowrap ">
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </motion.a>
  );
};

export default ProjectItem;
