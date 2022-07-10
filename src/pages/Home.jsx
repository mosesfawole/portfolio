import { Project, Resume } from "../components";

import { motion } from "framer-motion";
import HeroText from "../components/HeroText";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";
const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
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
      technology: "MongoDb + Express js + Node js + React-Redux template ",
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
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 0.5,
        staggerChildren: 0.2,
        when: "beforeChildren",
      },
    },
  };
  return (
    <div className="">
      {isLoading ? (
        <div className="loader">{<Loader />}</div>
      ) : (
        <>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1  md:gap-4 md:grid-cols-2"
          >
            <HeroText />
            <div className="right p-4 hidden md:grid projects md:relative  md:top-20  ">
              <p className="skills mb-4 text-center text-3xl font-semibold text-white">
                Projects
              </p>
              <div className="hidden md:grid md:grid-cols-2 gap-2 sm:grid-cols-2 shadow-md proj ">
                {projects.map((project, index) => (
                  <div key={index} className="">
                    <Project details={project} />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </div>
  );
};

export default Home;
