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
      <motion.div className=" ">
        {/* Flex container  */}
        <div className=" ">
          {/* Logo */}
          <p className="">
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
            className=" "
          >
            <p className="">Mo.dev</p>
          </motion.div>
          {/* Menu items */}
          <motion.div
            initial={{ y: -250 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.6, type: "string", stiffness: 500 }}
            className=" "
          >
            <ul className="">
              <motion.li
                onClick={() => setActive(!active)}
                className={active ? "" : "  "}
              >
                <Link className="" to="/">
                  Home
                </Link>
              </motion.li>
              <li onClick={() => setActive(false)} className={active ? "" : ""}>
                <Link className="" to="/info">
                  Resume
                </Link>
              </li>{" "}
            </ul>
          </motion.div>

          {/* Mobile menu  */}
          <div className="">
            <MdMenu className={isMenu ? "" : ""} onClick={openMenu} />

            <div id="menu" className={isMenu ? "" : ""}>
              <div onClick={handleClose} className=" ">
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
              <div className="">
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
