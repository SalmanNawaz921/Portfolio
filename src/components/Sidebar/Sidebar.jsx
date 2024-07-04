import { useState } from "react";
import { HiMiniBars3BottomRight, HiOutlineLockClosed } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

const Sidebar = ({ Menu }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <button onClick={toggleDrawer} className="text-bodyColor"><HiMiniBars3BottomRight className="text-5xl"/></button>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        className="bg-bodyColor text-black overflow-scroll"
        style={{backgroundColor:"#112240",height:"100%",display:"flex","flexDirection":"column",justifyContent:"space-between",alignItems:"left"}}
      >

      <button onClick={toggleDrawer} className="text-bodyColor absolute top-10 right-12 text-5xl "><IoClose/></button>
        <Menu />
      </Drawer>
    </>
  );
};

export default Sidebar;
