import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import { MdMenu, MdCancel } from "react-icons/md";
const Header = () => {
  const [isMenu, setisMenu] = useState(false);

  const openMenu = () => {
    setisMenu(!isMenu);
    document.getElementById("menu").style.width = "100%";
  };
  return (
    // navbar
    <nav className="">
      <motion.div
        initial={{ y: -250 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.6, type: "string", stiffness: 500 }}
        className="mx-auto p-4  shadow-lg"
      >
        {/* Flex container  */}
        <div className="flex items-center justify-between">
          {/* Logo */}

          <div className="pt-2  ">
            <p className="text-white text-3xl font-bold">Mo.dev</p>
          </div>
          {/* Menu items */}
          <div className="hidden space-x-6 md:flex ">
            <ul className=" text-white flex items-center space-x-3  transition-all translate-x-2 ">
              <li className="opacity-90  focus:opacity-100 cool-link">
                <Link to="/">Home</Link>
              </li>
              <li className="opacity-90  focus:opacity-100 cool-link ">
                <Link to="/projects">Projects</Link>
              </li>{" "}
              <li className="opacity-90  focus:opacity-100 cool-link ">
                <Link to="/info">About Me</Link>
              </li>{" "}
              <li className="opacity-90  focus:opacity-100 cool-link ">
                <Link to="contact">Contact </Link>
              </li>
            </ul>
          </div>

          {/* Mobile menu  */}
          <div className="md:hidden flex">
            <MdMenu
              className={isMenu ? "hidden" : "flex text-white text-3xl t"}
              onClick={openMenu}
            />

            <div id="menu" className="app-menu">
              <div className="flex closebtn  ">
                {isMenu ? (
                  <MdCancel
                    className="text-4xl text-white "
                    onClick={() => {
                      setisMenu(!isMenu);
                      document.getElementById("menu").style.width = 0;
                    }}
                  />
                ) : (
                  <FaAngleDoubleLeft />
                )}
              </div>
              <div className="content text-2xl">
                <Link to="/">Home</Link>

                <Link to="/projects">Projects</Link>

                <Link to="/info">About Me</Link>

                <Link to="/contact">Contact </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </nav>
  );
};

export default Header;
