import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import HeroText from "../components/HeroText";
import { motion } from "framer-motion";
import { Resume } from "../components";
import { useEffect } from "react";
const Info = () => {
  const containerVariants = {
    hidden: {
      y: "-100vh",
    },
    visible: {
      y: 0,
      transition: {
        duration: 1,
        type: "spring",
        stiffness: 100,
        when: "beforeChildren",
        ease: "easeInOut",
      },
    },
  };
  return (
    <div className="">
      <div className="">
        <div className="">
          <HeroText />
          <Footer />
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className=" "
        >
          <p className="">Resume</p>
          <Resume />
        </motion.div>
      </div>
      <div className=" ">
        <div className="buttons   ">
          <button className="button  ">
            <Link className="flex " to="/projects">
              <FaArrowLeft className=" " /> Projects
            </Link>
          </button>
        </div>
        <div className="buttons ">
          <button className="button  ">
            <Link className="" to="/">
              Home <FaArrowRight className="" />
            </Link>
          </button>
        </div>
      </div>
      <div className="md:hidden"></div>
    </div>
  );
};

export default Info;
