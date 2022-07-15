import { motion } from "framer-motion";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Explore = () => {
  const buttonVariants = {
    hidden: {
      opacity: 0,
      scale: "0.5",
    },
    visible: {
      scale: 1.05,
      opacity: 1,
      // boxShadow: "0px 0px 8px rgb(255,255,255",
      textShadow: "0px 0px 8px rgb(255,255,255",
      transition: {
        duration: 0.3,
        repeatType: "reverse",
        repeat: Infinity,
      },
    },
  };
  return (
    <div className="buttons flex justify-center p-4  md:hidden">
      <motion.button
        variants={buttonVariants}
        hidden="hidden"
        animate="visible"
        className="button flex p-2 items-center text-gray-200  rounded-md "
      >
        <Link
          className="flex items-center text-md font-semibold"
          to="/projects"
        >
          Explore <FaArrowRight className="ml-2" />
        </Link>
      </motion.button>
    </div>
  );
};

export default Explore;
