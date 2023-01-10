import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { MdMenu } from "react-icons/md";
import navs from "../lib/navs";
import { useEffect } from "react";
const Header = () => {
  const [isMenu, setIsMenu] = useState(false);

  const { pathname } = useLocation();
  const [currentPage, setCurrentPage] = useState(pathname);
  useEffect(() => {
    setCurrentPage(pathname);
  });
  const openMenu = () => {
    setIsMenu(true);
  };
  const handleClose = () => setIsMenu(!isMenu);
  {
  }
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
    <div className="header  p-4">
      {/* desktop view */}
      <div className="desktop text-white md:flex hidden">
        <div className="logo flex flex-1">mo.dev</div>
        <div className="flex items-center">
          <ul className="flex gap-4">
            {navs.map((item, index) => (
              <li
                key={index}
                onClick={() => setIsMenu(false)}
                className={
                  currentPage === `/${item}`
                    ? `border-b-2 pb-[70px] `
                    : "flex gap-3 hover:border-opacity-[.5] hover:border-b-2 hover:pb-[70px] hover:border-white  "
                }
              >
                <Link to={`/${item}`}>
                  <p>{item}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile menu  */}
      <div className="md:hidden flex items-center">
        <div className="logo flex flex-1">mo.dev</div>

        <div className="">
          <MdMenu
            className={isMenu ? "hidden" : "flex text-[2rem]"}
            onClick={openMenu}
          />
        </div>

        <div id="menu" className={isMenu ? "" : "hidden"}>
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
              home
            </Link>

            <Link to="/projects" onClick={handleClose}>
              projects
            </Link>

            <Link to="/info" onClick={handleClose}>
              about Me
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
