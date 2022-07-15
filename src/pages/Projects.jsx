import { Project } from "../components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import HeroText from "../components/HeroText";
const Projects = () => {
  let navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);

    if (window.screen.width > 768) {
      navigate("/");
    }
  }, [navigate]);
  const projects = [
    {
      title: "Syncfusion Dashboard",
      description: "Functional Dashboard created using Syncfusion ui comonents",
      github: "https://github.com/mosesfawole/syncfusion-dashboard",
      live: "https://syncfusion-dashboard-gamma.vercel.app/",
      technology: "React js + Syncfusion components + Tailwind ",
    },
    {
      title: "Ecommerce store",
      description: "Ecommerce web app with stripe payment gateway",
      github: "https://github.com/mosesfawole/ecommerce",
      live: "https://ecommerce-mosesfawole.vercel.app/",
      technology: "Next js + Sanity cms + stripe",
    },
    {
      title: "Todo App",
      description: "A simple todo app with user authentication  ",
      github: "https://github.com/mosesfawole/checkmate",
      live: "https://mf-todo-app.herokuapp.com/login",
      technology:
        "MongoDb + Express js + React js + Node js + Redux template + Toastify",
    },
    {
      title: "Countries in the world",
      description: "Frontend mentor challenge",
      github: "https://github.com/mosesfawole/countries-api",
      live: "https://countries-api-tau-blush.vercel.app",
      technology: "React + Tailwind Css + framer-motion ",
    },

    {
      title: "Recipe App",
      description: "Food recipe app",
      github: "https://github.com/mosesfawole/recipe-app",
      live: "https://mf-recipe-app.netlify.app/",
      technology: "React + Tailwind Css + framer-motion + styled-components",
    },
    {
      title: " Snap",
      description: "frontend mentor challenge, with dropdown and sidepanel",
      github: "https://mf-snap.netlify.app",
      live: "https://github.com/mosesfawole/snap",
      technology: "React + Tailwind Css + HeadlessUi",
    },
    {
      title: " Quiz App",
      description: "A simple quiz app ",
      github: "https://mf-quiz-app.netlify.app/",
      live: "https://github.com/mosesfawole/quiz-app",
      technology: "React-Typescript template + styled-components",
    },
  ];

  const containerVariants = {
    hidden: {
      opacity: 0,
      x: "100vw",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        delay: 0.5,
        type: "spring",
        stiffness: 100,
        when: "beforeChildren",
        ease: "easeInOut",
      },
    },
  };
  return (
    <>
      <div id="projects" className="md:hidden cursor-default items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="right grid projects"
        >
          <p className="mb-10 skills text-center text-2xl   text-white">
            Projects
          </p>

          <div className=" grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-4 w-3/4  m-auto opacity-100 shadow-md proj ">
            {projects.map((project, index) => (
              <div key={index} className="">
                <Project details={project} />
              </div>
            ))}
          </div>
        </motion.div>

        <div className="flex justify-evenly  md:hidden mt-6 mb-4">
          <div className="buttons  ">
            <button className="button text-gray-200 px-3 py-2 rounded-md ">
              <Link className="flex items-center" to="/">
                <FaArrowLeft className="mr-2 " /> Home
              </Link>
            </button>
          </div>

          <div className="buttons  flex justify-center">
            <button className="button flex  text-gray-200 px-3 py-2 rounded-md ">
              <Link className="flex items-center" to="/info">
                Info <FaArrowRight className="ml-2 " />
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
