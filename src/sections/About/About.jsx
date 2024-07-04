import profile from "../../assets/profile.jpg";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import { easeInOut, motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import { known_technologies } from "../../constant/constant";

const About = () => {
  return (
    <motion.div
      variants={fadeIn("up", "intertia", 0.35)}
      className="mt-80 med:mt-40"
    >
      <SectionHeading title="About Me" index="01. " />
      <div className="flex flex-wrap justify-center  mt-4 gap-10  ">
        <div className="xl:w-[55%] lg:w-[55%]  w-[100%]">
          <p className="text-bodyColor sm:text-lg text-base">
            Hello! My name is Salman, and I enjoy creating things that live on
            the internet. My interest in web development started back in my
            early college days when I decided to try building simple websites —
            turns out hacking together a basic personal website taught me a lot
            about <span className="text-btnColor">HTML & CSS!</span>
            <br />
            <br />
            Fast-forward to today, and I’ve had the privilege of serving as a
            teaching assistant in <span className="text-btnColor"> Programming Fundamentals and Object-Oriented
            Programming at UET, Lahore.</span> My main focus these days is building
            dynamic, user-friendly web applications using technologies like
            <span className="text-btnColor"> React.js and Node.js. </span>I love creating accessible and inclusive
            digital experiences that can be used by everyone.
            <br />
            <br />I also recently worked on several coding projects and explored
            the latest technologies to stay up-to-date in the ever-evolving
            world of web development. Whether it's a personal project or a
            collaboration, I strive to make learning and development a fun and
            engaging experience for everyone involved. Here are a few
            technologies I’ve been working with recently:
          </p>
          <ul className="flex gap-1 flex-wrap m-4 med:items-center med:justify-center">
            {known_technologies.map((tech) => (
              <li
                className="text-bodyColor text-sm med:text-xs list-disc w-[40%]"
                key={tech.key}
              >
                {tech.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="md:w-[40%] w-[100%] relative rounded-md hover:filter-none">
          <div className="relative w-[300px] h-[300px] mx-auto ">
            <motion.img
              src={profile}
              className="w-full h-full rounded-md hover:opacity-100 relative filter  grayscale-[100%] contrast-[1]  hover:filter-none"
              alt="Profile Pic"
              transition={{ duration: 0.5, ease: easeInOut }}
            />
            <div className=" absolute inset-4 border-[2px] border-btnColor rounded-[0.375rem] w-[100%] h-full -z-50 border-l"></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default SectionWrapper(About, "about");
