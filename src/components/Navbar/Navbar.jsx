import { useState } from "react";
import { navItems } from "../../constant/constant";
import Sidebar from "../Sidebar/Sidebar";
import {
  motion,
  useAnimation,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";

const Menu = () => {
  return (
    <ul className="md:gap-[20px] mt-40 gap-16 md:mt-0 flex  flex-col med:items-center md:flex-row">
      {navItems.map((item) => (
        <li className="text-headingColor md:text-sm text-2xl  mt-3 flex gap-2">
          <a
            href={`#${item.id}`}
            className="md:flex-row flex flex-col items-center"
          >
            <span className="text-btnColor">{item.key}. </span>
            <h1>{item.value}</h1>
          </a>
        </li>
      ))}
      <button
        type="submit"
        className="ml-2 red-btn p-[0.60rem] px-[1.1rem] text-xs"
      >
        <a
          href="https://drive.google.com/file/d/1c6LpkiaSpe82L8VpeQfXO1bvq_3eM1E-/view"
          target="_blank"
        >
          Resume
        </a>
      </button>
    </ul>
  );
};

const Navbar = () => {
  const controls = useAnimation();
  const { scrollY } = useScroll();
  const [isSticky, setIsSticky] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious();
    if (latest > 10 && latest < prev) {
      setIsSticky(true);
      controls.start("visible");
    } else if (latest > 20) {
      setIsSticky(false);
      controls.start("hidden");
    } else {
      controls.start("visible");
      setIsSticky(false);
    }
  });

  return (
    <motion.nav
      initial={{ y: 0 }}
      variants={{
        visible: { y: 0 },
        hidden: { y: -100 },
      }}
      animate={controls}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`sm:px-10 py-4 ${
        isSticky
          ? "sticky top-0 bg-[#0a192f]  py-2   shadow-lg shadow-[ 10px 30px -10px rgba(2,12,27,0.7] z-10"
          : ""
      }`}
    >
      <div className="flex items-center justify-between px-2">
        <a href="#home">
          <svg
            width="60px"
            height="60px"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.5 4.5V10.5L7.5 14L13.5 10.5V4.5L7.5 1L1.5 4.5Z"
              stroke="white"
              stroke-width="0.4"
            />
            <text
              x="7.5"
              y="9.5"
              textAnchor="middle"
              fontSize="6"
              fill="#00ffcc"
            >
              S
            </text>
          </svg>
        </a>
        <div className="md:block hidden">{Menu()}</div>

        <div className="block md:hidden ">
          <Sidebar Menu={Menu} />
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
