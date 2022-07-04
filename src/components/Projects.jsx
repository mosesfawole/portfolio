import React from "react";
import { FaEye } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const Projects = ({ data }) => {
  const { title, description, github, live, stack } = data;
  return (
    <>
      <div className="bg-slate-800 "></div>
      <p className="text-xl font-mono uppercase text-white text-center">
        Projects
      </p>
      <motion.div
        initial={{ x: -250 }}
        animate={{ x: -10 }}
        transition={{ delay: 0.2, type: "string", stiffness: 120 }}
        className="grid md:grid-cols-2 gap-2 px-4 py-6  cursor-default items-center overflow-y-auto  "
      >
        <div className="proj box text-white p-8 shadow-md ">
          <h3 className="text-3xl font-semibold mb-2">{title}</h3>
          <h4 className="uppercase font-mono font-semibold text-sm mb-2 ">
            {stack}
          </h4>
          <p className="text-sm text-slate-400 capitalize  mb-2">
            {description}
          </p>
          <div className="flex text-xs  ">
            <span className="icon mr-2 cursor-pointer transition-all  text-gray-400 hover:text-gray-200">
              <Link className="flex items-center" to={github}>
                <FaEye /> Live
              </Link>
            </span>
            <span className="icon  mr-2 cursor-pointer transition-all  text-gray-400 hover:text-gray-200">
              <Link className="flex items-center" to={live}>
                <FaEye /> source
              </Link>
            </span>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Projects;
