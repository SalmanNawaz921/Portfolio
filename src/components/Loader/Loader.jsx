import React from "react";
import { motion } from "framer-motion";

const Loader = () => {
  const hexagonVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: 2 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1, delay: 2 },
    },
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "#0a192f",
        position: "relative"
        
      }}
    >
      <svg
        width="100px"
        height="100px"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M1.5 4.5V10.5L7.5 14L13.5 10.5V4.5L7.5 1L1.5 4.5Z"
          stroke="#61f8d5"
          strokeWidth="0.5"
          fill="none"
          initial="hidden"
          animate="visible"
          variants={hexagonVariants}
        />
      </svg>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={textVariants}
        style={{
          position: "absolute",
          color: "#61f8d5",
          fontSize: "2rem",
        }}
      >
        S
      </motion.div>
    </div>
  );
};

export default Loader;
