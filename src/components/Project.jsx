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
      <div className="text-white p-8">
        <ul className="grid md:grid-cols-3 gap-8">
          {projects.map((item, index) => (
            <li key={index} className="shadow-lg">
              <p className="font- font-bellefair text-3xl">{item.title}</p>
              <p className="font-barlow text-base ">{item.description}</p>
              <div className="links font-barlow text-sm flex  gap-4 ">
                <a
                  className="text-[#D0D6F9] hover:text-white "
                  href={item.live}
                  rel="noreferrer"
                  target="_blank"
                  noreferrer="true"
                >
                  Live
                  {/* Live <FaEye className="text-white" /> */}
                </a>
                <a
                  className="text-[#D0D6F9] hover:text-white"
                  href={item.github}
                  rel="noreferrer"
                  target="_blank"
                  noreferrer="true"
                >
                  Source {/* Source <FaCodeBranch className="text-white" /> */}
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
