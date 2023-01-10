import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";
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
    <div className="header  py-10">
      {/* desktop view */}
      <div className="desktop md:flex justify-center items-center hidden">
        <div className="logo hidden  md:flex flex-1 px-6 text-3xl  text-white  font-barlow ">
          <Link to={"/home"}>mo.dev</Link>
        </div>
        <div className="hidden sm:hidden right-0 bg-header-bg backdrop-blur-2xl md:flex md:unset">
          <ul className="flex uppercase gap-12 p-6 h-[96px]  w-[830px] sm:w-full text-white text-base font-barlow pr-[125px] pl-[123px] ">
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
      <div className="md:hidden text-white flex px-6 items-center">
        <div className="logo md:hidden flex  flex-1">mo.dev</div>

        <div className="">
          <MdMenu
            className={isMenu ? "hidden" : "flex text-3xl"}
            onClick={openMenu}
          />
        </div>

        <div id="menu" className={isMenu ? "" : "hidden"}>
          <div onClick={handleClose} className="text-3xl ">
            <MdClose />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
