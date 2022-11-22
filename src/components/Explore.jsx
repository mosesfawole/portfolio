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
    <div className="">
      <motion.button
        variants={buttonVariants}
        hidden="hidden"
        animate="visible"
        className=" "
      >
        <Link className="" to="/projects">
          Explore <FaArrowRight className="ml-2" />
        </Link>
      </motion.button>
    </div>
  );
};

export default Explore;
