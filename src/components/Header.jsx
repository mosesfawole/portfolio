import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
const Header = () => {
  const [isMenu, setisMenu] = useState(false);
  const [isActive, setisActive] = useState(false);
  return (
    // navbar
    <motion.nav
      initial={{ y: -250 }}
      animate={{ y: -10, type: "string", stiffness: 120 }}
      className="relative container mx-auto p-4"
    >
      {/* Flex container  */}
      <div className="flex items-center justify-between">
        {/* Logo */}

        <div className="pt-2">
          <p className="text-white text-3xl font-bold">Mo.dev</p>
        </div>
        {/* Menu items */}
        <div className="hidden space-x-6 md:flex">
          <ul className=" text-white flex items-center space-x-3  transition-all translate-x-2 ">
            <li
              onClick={() => setisActive(!isActive)}
              className={isActive ? "bor border-b-2 " : " border-b-0"}
            >
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
          <FaAngleDoubleLeft
            className={isMenu === true ? "hidden" : "flex"}
            onClick={() => setisMenu(!isMenu)}
          />
          <motion.div
            id="menu"
            className={isMenu ? "app-menu menu-open" : "hidden"}
          >
            {isMenu ? (
              <FaAngleDoubleRight
                className="m-4 text-3xl "
                onClick={() => setisMenu(!isMenu)}
              />
            ) : (
              <FaAngleDoubleLeft />
            )}
            <ul className="p-6 text-center flex flex-col  items-center">
              <li onClick={() => setisMenu(!isMenu)}>
                <Link to="/">Home</Link>
              </li>
              <li onClick={() => setisMenu(!isMenu)}>
                <Link to="/projects">Projects</Link>
              </li>{" "}
              <li onClick={() => setisMenu(!isMenu)}>
                <Link to="/info">About Me</Link>
              </li>{" "}
              <li onClick={() => setisMenu(!isMenu)}>
                <Link to="/contact">Contact </Link>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Header;
