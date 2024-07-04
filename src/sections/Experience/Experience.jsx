import { useState } from "react";
import { experiences_arr } from "../../constant/constant";
import ExperienceItem from "../../components/ExperienceItem/ExperienceItem";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import { fadeIn } from "../../utils/motion";
import { motion } from "framer-motion";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";

const Experience = () => {
  const [currExperience, setCurrExperience] = useState(experiences_arr[0]);
  const handleClick = (e) => {
    setCurrExperience(
      experiences_arr.find((i) => i.company_name === e.target.value)
    );
  };
  return (
      <motion.div variants={fadeIn("up", "intertia", 0.35)} className="text-base">
        <SectionHeading
          title="Where I've Worked"
          index="02. "
        />

        <div className="flex sm:flex-row flex-col xs:items-center my-10 gap-12 sm:text-base text-sm">
          <div className="flex sm:flex-col gap-2 items-center ">
              {experiences_arr.map((experience) => (
                <button
                  className={`hover:text-btnColor ${
                    currExperience.company_name !== experience.company_name
                      ? "text-bodyColor sm:border-l-2 border-transparent xs:border-b-2"
                      : "text-btnColor sm:border-l-2 border-[#00ffcc] xs:border-b-2"
                  }  whitespace-nowrap xs:text-xs hover:bg-[#112240] p-4 tracking-wide`}
                  onClick={handleClick}
                  value={experience.company_name}
                >
                  {experience.company_name}
                </button>
              ))}
          </div>
          <ExperienceItem exp={currExperience} />
        </div>
      </motion.div>
  );
};

export default SectionWrapper(Experience, "experience");