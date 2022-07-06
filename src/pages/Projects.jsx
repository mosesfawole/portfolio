import { Project } from "../components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
const Projects = () => {
  let navigate = useNavigate();
  useEffect(() => {
    if (window.screen.width > 768) {
      navigate("/");
    }
  }, [navigate]);
  const projects = [
    {
      title: "Checkmate",
      description: "Sign up portal for Checkmate Africa community",
      github: "https://github.com/mosesfawole/checkmate",
      live: "https://checkmate.africa/",
      stack: "React + Styled Components",
    },
    {
      title: "Checkmate",
      description: "Sign up portal for Checkmate Africa community",
      github: "https://github.com/mosesfawole/checkmate",
      live: "https://checkmate.africa/",
      stack: "React + Styled Components",
    },
    {
      title: "Checkmate",
      description: "Sign up portal for Checkmate Africa community",
      github: "https://github.com/mosesfawole/checkmate",
      live: "https://checkmate.africa/",
      stack: "React + Styled Components",
    },
    {
      title: "Checkmate",
      description: "Sign up portal for Checkmate Africa community",
      github: "https://github.com/mosesfawole/checkmate",
      live: "https://checkmate.africa/",
      stack: "React + Styled Components",
    },
    {
      title: "Checkmate",
      description: "Sign up portal for Checkmate Africa community",
      github: "https://github.com/mosesfawole/checkmate",
      live: "https://checkmate.africa/",
      stack: "React + Styled Components",
    },
    {
      title: "Checkmate",
      description: "Sign up portal for Checkmate Africa community",
      github: "https://github.com/mosesfawole/checkmate",
      live: "https://checkmate.africa/",
      stack: "React + Styled Components",
    },
    {
      title: "Checkmate",
      description: "Sign up portal for Checkmate Africa community",
      github: "https://github.com/mosesfawole/checkmate",
      live: "https://checkmate.africa/",
      stack: "React + Styled Components",
    },
  ];
  const containerVariants = {
    hidden: {
      opacity: 0,
      x: "100vh",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        delay: 0.5,
        when: "beforeChildren",
      },
    },
  };
  return (
    <>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        id="projects"
        className="md:hidden cursor-default items-center"
      >
        <Header />
        <div className="right grid projects">
          <p className="text-white text-xl font-mono uppercase mb-10 font-bold text-center ">
            Projects
          </p>
          <div className=" grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-4 w-3/4  m-auto opacity-100 shadow-md proj ">
            {projects.map((project, index) => (
              <div key={index} className="">
                <Project details={project} />
              </div>
            ))}
          </div>
        </div>
        <div className="buttons flex justify-evenly mb-10 ">
          <div className="button flex mt-2 ">
            <button className="text-gray-200 px-5 p-2 rounded-md">
              <Link className="flex items-center" to="/">
                <FaArrowLeft className="mr-2" /> Home
              </Link>
            </button>
          </div>
          <div className="button flex mt-2">
            <button className="text-gray-200 px-5 p-2 rounded-md">
              <Link className="flex items-center" to="/info">
                Info <FaArrowRight className="ml-2" />
              </Link>
            </button>
          </div>
        </div>
        <div className="p-2 flex justify-center">
          <Footer />
        </div>
      </motion.div>
    </>
  );
};

export default Projects;
