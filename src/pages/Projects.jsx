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
      title: "Syncfusion Dashboard",
      description:
        "Functional Dashboard created using Syncfusion ui comonents,tailwind css and reactjs",
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
      description:
        "A todo app with user authentication built with the mern stack, redux template ",
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
      title: "Fitness App",
      description: "An exercise fitness app",
      github: "https://github.com/mosesfawole/recipe-app",
      live: "https://mf-recipe-app.netlify.app/",
      technology: "React + Tailwind Css + framer-motion",
    },
    {
      title: " Blog App",
      description: "A simple blog app",
      github: "https://github.com/mosesfawole/blog-app",
      live: "https://checkmate.africa/",
      technology: "React + Json server ",
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
      <div id="projects" className="md:hidden cursor-default items-center">
        <Header />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="right grid projects"
        >
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
        </motion.div>

        <div className="flex justify-evenly  md:hidden mt-6 mb-4">
          <div className="buttons  ">
            <button className="button   text-gray-200 px-3 py-2 rounded-md ">
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
        <Footer />
      </div>
    </>
  );
};

export default Projects;
