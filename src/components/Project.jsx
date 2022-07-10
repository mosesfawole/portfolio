import { FaEye, FaCodeBranch } from "react-icons/fa";
import { motion } from "framer-motion";
const Project = ({ details }) => {
  const { title, description, github, live, technology } = details;
  const containerVariants = {
    hidden: {
      opacity: 0,
      x: "-100vw",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.2,
        type: "string",
      },
    },
  };
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className=" cursor-default items-center"
    >
      <div className="box text-white p-8 shadow-md ">
        <h3 className="text-3xl font-semibold mb-2">{title}</h3>
        <h4 className="uppercase font-mono font-semibold text-md mb-2 ">
          {technology}
        </h4>
        <p className="desc text-md text-gray-50 capitalize  mb-2">
          {description}
        </p>
        <div className="flex text-sm   ">
          <span className="icon cursor-pointer transition-all  text-gray-400 hover:text-white">
            <a
              className="flex mr-2  items-center"
              href={live}
              target="_blank"
              rel="noreferrer"
            >
              <FaEye className="mr-1" /> Live
            </a>
          </span>
          <span className="icon  cursor-pointer transition-all  text-gray-400 hover:text-white">
            <a
              className="flex mr-2  items-center"
              href={github}
              target="_blank "
              rel="noreferrer"
            >
              <FaCodeBranch className="mr-1" /> Source
            </a>
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
