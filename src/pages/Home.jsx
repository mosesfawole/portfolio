import { Footer, Header, Project, Resume } from "../components";

import { motion } from "framer-motion";
import HeroText from "../components/HeroText";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import Explore from "../components/Explore";
const Home = () => {
  const [isLoading, setIsLoading] = useState(false);

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
      description: "Food recipe app ",
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
    <>
      {isLoading ? (
        <div className="loader">{<Loader />}</div>
      ) : (
        <div className="">
          <motion.div
            initial="hidden "
            animate="visible"
            className=" md:grid md:grid-cols-2"
          >
            <div className="md:fixed md:w-1/2">
              <HeroText />
              <Explore />
            </div>
            <motion.div initial="hidden" animate="visible" className=" ">
              <div className="hidden relative right md:grid ">
                <p className="text-white">Projects</p>
                <div className="md:grid md:grid-cols-2 md:gap-4 ">
                  {projects.map((project, index) => (
                    <div key={index} className="">
                      <Project details={project} />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default Home;
