import { FaEye, FaCodeBranch } from "react-icons/fa";
import projects from "../lib/projects";
import { motion } from "framer-motion";
const Project = () => {
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
      <div className="text-white">
        <ul>
          {projects.map((item, index) => (
            <li>
              <p>{item.title}</p>
              <p>{item.description}</p>
              <div className="links">
                <a
                  href={item.live}
                  rel="noreferrer"
                  target="_blank"
                  noreferrer="true"
                >
                  Live <FaEye className="text-white" />
                </a>
                <a
                  href={item.github}
                  rel="noreferrer"
                  target="_blank"
                  noreferrer="true"
                >
                  {" "}
                  Source <FaCodeBranch className="text-white" />
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default Project;
