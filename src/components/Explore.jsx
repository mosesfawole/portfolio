import { motion } from "framer-motion";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Explore = () => {
  return (
    <div className="buttons flex justify-center p-4  md:hidden">
      <motion.button
        // variants={buttonVariants}
        hidden="hidden"
        animate="visible"
        className="button flex p-2 text-gray-200  rounded-md "
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
