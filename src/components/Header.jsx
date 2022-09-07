import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { MdMenu } from "react-icons/md";
const Header = () => {
  const [isMenu, setIsMenu] = useState(false);
  const [active, setActive] = useState(true);
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

  return (
    // navbar
    <div className="">
      <motion.div className="mx-auto p-4 ">
        {/* Flex container  */}
        <div className="flex items-center justify-between md:justify-evenly ">
          {/* Logo */}
          <p className="md:hidden text-white text-3xl font-rale font-bold">
            <Link to="/">Mo.dev</Link>
          </p>
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
            <p className="hidden md:flex text-white text-3xl font-rale font-bold cursor-move">
              Mo.dev
            </p>
          </motion.div>
          {/* Menu items */}
          <motion.div
            initial={{ y: -250 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.6, type: "string", stiffness: 500 }}
            className="hidden text-xl space-x-6 font-arima md:flex "
          >
            <ul className=" text-white flex items-center space-x-5  ">
              <motion.li
                onClick={() => setActive(!active)}
                className={active ? "border-l-4 border-indigo-500 " : "  "}
              >
                <Link
                  className="li opacity-70 hover:opacity-100 items-center"
                  to="/"
                >
                  Home
                </Link>
              </motion.li>
              <li
                onClick={() => setActive(false)}
                className={
                  active
                    ? "opacity:70"
                    : "border-l-4 opacity:100 border-indigo-500"
                }
              >
                <Link className="li opacity-70 hover:opacity-100" to="/info">
                  Resume
                </Link>
              </li>{" "}
            </ul>
          </motion.div>

          {/* Mobile menu  */}
          <div className="md:hidden">
            <MdMenu
              className={isMenu ? "" : "text-white text-3xl"}
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
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
