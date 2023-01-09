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
      className=""
    >
      <div className="flex flex-col gap-4 justify-center items-center shadow-lg  h-[300px]">
        <h3 className="text-xl  font-bold">{title}</h3>
        <h4 className="">{technology}</h4>
        <p className="">{description}</p>
        <div className="flex justify-center items-center gap-4">
          <span className="opacity-80 hover:opacity-100">
            <a
              title="Live preview"
              className=""
              href={live}
              target="_blank"
              rel="noreferrer"
            >
              <FaEye className="flex items-center text-center" /> Live
            </a>
          </span>
          <span className="opacity-80 hover:opacity-100">
            <a
              title="Source code"
              className=""
              href={github}
              target="_blank "
              rel="noreferrer"
            >
              <FaCodeBranch className="opacity-80 hover:opacity-100" /> Source
            </a>
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
