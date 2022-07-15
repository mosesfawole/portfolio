import { FaEye, FaCodeBranch } from "react-icons/fa";
import { motion } from "framer-motion";
const Project = ({ details }) => {
  const { title, description, github, live, technology } = details;
  const containerVariants = {
    hidden: {
      opacity: 0,
      y: "-100vh",
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        type: "spring",
        stiffness: 100,
        when: "beforeChildren",
        ease: "easeInOut",
      },
    },
  };
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col cursor-default"
    >
      <div className="box p-8   rounded-lg   text-white  shadow-lg ">
        <h3 className="text-2xl font-arima  font-semibold mb-2">{title}</h3>
        <h4 className="uppercase tech font-mono font-semibold text-xs mb-2 ">
          {technology}
        </h4>
        <p className="desc text-sm text-gray-50   mb-2">{description}</p>
        <div className="flex text-xs  ">
          <span className="icon   text-gray-400 hover:text-white">
            <a
              title="Live preview"
              className="mr-2 flex  items-center"
              href={live}
              target="_blank"
              rel="noreferrer"
            >
              <FaEye className="mr-1" /> Live
            </a>
          </span>
          <span className="icon  text-gray-400 hover:text-white">
            <a
              title="Source code"
              className="mr-2  flex items-center"
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
