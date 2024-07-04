import { motion } from "framer-motion";
import { staggerContainer } from "../../utils/motion";

const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="my-[0px] mx-[auto]
        lg:py-[100px] md:py-[80px] sm:py-[60px] px-[0px]
        max-w-[1000px] "
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        <Component />
      </motion.section>
    );
  };
export default SectionWrapper;
