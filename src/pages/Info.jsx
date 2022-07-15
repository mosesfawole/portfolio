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
    <div className="items-center">
      <div className="grid md:grid-cols-2 p-4">
        <div className="hidden md:block">
          <HeroText />
          <Footer />
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="p-2 md:relative md:top-10 "
        >
          <p className="mb-4 skills font-arima text-center text-2xl   text-white">
            Resume
          </p>
          <Resume />
        </motion.div>
      </div>
      <div className="flex justify-evenly md:hidden ">
        <div className="buttons   flex justify-center">
          <button className="button flex m-2 text-gray-200 px-3 py-2 rounded-md ">
            <Link className="flex items-center" to="/projects">
              <FaArrowLeft className="mr-2 " /> Projects
            </Link>
          </button>
        </div>
        <div className="buttons  flex justify-center">
          <button className="button flex m-2 text-gray-200 px-3 py-2 rounded-md ">
            <Link className="flex items-center" to="/">
              Home <FaArrowRight className="ml-2 r" />
            </Link>
          </button>
        </div>
      </div>
      <div className="md:hidden"></div>
    </div>
  );
};

export default Info;
