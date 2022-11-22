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
    if (window.screen.width > 768) {
      navigate("/");
    }
  }, []);
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

  return (
    <div className="">
      <div id="projects" className=" ">
        <div className="">
          <p className="">Projects</p>

          <div className="">
            {projects.map((project, index) => (
              <div key={index} className="">
                <Project details={project} />
              </div>
            ))}
          </div>
        </div>

        <div className="">
          <div className="  ">
            <button className="">
              <Link className="" to="/">
                <FaArrowLeft className="" /> Home
              </Link>
            </button>
          </div>

          <div className="  ">
            <button className="">
              <Link className="" to="/info">
                Info <FaArrowRight className="ml-2 " />
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
