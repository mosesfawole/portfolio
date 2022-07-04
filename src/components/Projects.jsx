import React from "react";
import { FaEye, FaCodeBranch } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const Projects = ({ data }) => {
  const { title, description, github, live, stack } = data;
  return (
    <motion.div
      initial={{ x: -250 }}
      animate={{ x: -10 }}
      transition={{ delay: 0.2, type: "string", stiffness: 120 }}
      className=" cursor-default items-center"
    >
      <div className="box text-white p-8 shadow-md ">
        <h3 className="text-3xl font-semibold mb-2">{title}</h3>
        <h4 className="uppercase font-mono font-semibold text-sm mb-2 ">
          {stack}
        </h4>
        <p className="text-sm text-slate-400 capitalize  mb-2">{description}</p>
        <div className="flex text-xs  ">
          <span className="icon cursor-pointer transition-all  text-gray-400 hover:text-white">
            <Link className="flex mr-2  items-center" to={github}>
              <FaEye className="mr-1" /> Live
            </Link>
          </span>
          <span className="icon  cursor-pointer transition-all  text-gray-400 hover:text-white">
            <Link className="flex mr-2  items-center" to={live}>
              <FaCodeBranch className="mr-1" /> Source
            </Link>
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
