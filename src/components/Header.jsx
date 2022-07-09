import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaAngleDoubleLeft } from "react-icons/fa";
import { MdMenu, MdCancel } from "react-icons/md";
const Header = () => {
  const [isMenu, setIsMenu] = useState(false);

  const openMenu = () => {
    setIsMenu(!isMenu);
  };
  const handleClose = () => {
    setIsMenu(!isMenu);
  };
  const logoVariants = {
    hidden: { rotate: -180 },
    visible: {
      rotate: 0,
      transition: {
        duration: 1,
      },
    },
  };
  // const pVariants = {
  //   hidden: {
  //     opacity: 0,
  //     pathLength: 0,
  //   },
  //   visible: {
  //     opacity: 1,
  //     pathLength: 1,
  //     transition: {
  //       duration: 2,
  //       ease: "easeInOut",
  //     },
  //   },
  // };
  return (
    // navbar
    <nav className="">
      <motion.div className="mx-auto p-4 ">
        {/* Flex container  */}
        <div className="flex items-center  justify-between">
          {/* Logo */}

          <motion.div
            variants={logoVariants}
            initial="hidden"
            animate="visible"
            drag
            dragConstraints={{
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
            }}
            className="pt-2 "
          >
            <motion.p className="text-white text-3xl font-bold cursor-move">
              Mo.dev
            </motion.p>
          </motion.div>
          {/* Menu items */}
          <motion.div
            initial={{ y: -250 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.6, type: "string", stiffness: 500 }}
            className="hidden space-x-6 md:flex "
          >
            <ul className=" text-white flex items-center space-x-3  transition-all translate-x-2 ">
              <li className="opacity-90  focus:opacity-100 cool-link">
                <Link to="/">Home</Link>
              </li>
              <li className="md:hidden opacity-90  focus:opacity-100 cool-link ">
                <Link to="/projects">Projects</Link>
              </li>{" "}
              <li className="opacity-90  focus:opacity-100 cool-link ">
                <Link to="/info">About Me</Link>
              </li>{" "}
              <li className="opacity-90  focus:opacity-100 cool-link ">
                <Link to="contact">Contact </Link>
              </li>
            </ul>
          </motion.div>

          {/* Mobile menu  */}
          <div className="md:hidden flex">
            <MdMenu
              className={isMenu ? "hidden" : "flex text-white text-3xl t"}
              onClick={openMenu}
            />

            <div id="menu" className={isMenu ? "app-menu" : "hidden"}>
              <div
                onClick={handleClose}
                className="flex closebtn font-bold text-white  "
              >
                <svg
                  stroke="#fff"
                  fill="#fff"
                  width="26"
                  height="26"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="#151515" fillRule="evenodd">
                    <path d="m2.393.98 22.628 22.628-1.414 1.414L.979 2.395z" />
                    <path d="M.98 23.607 23.609.979l1.414 1.414L2.395 25.021z" />
                  </g>
                </svg>
              </div>
              <div className="content text-2xl">
                <Link to="/" onClick={handleClose}>
                  Home
                </Link>

                <Link to="/projects" onClick={handleClose}>
                  Projects
                </Link>

                <Link to="/info" onClick={handleClose}>
                  About Me
                </Link>

                <Link to="/contact" onClick={handleClose}>
                  Contact{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </nav>
  );
};

export default Header;
