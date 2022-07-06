import { Project } from "../components";
import Footer from "../components/Footer";
import Avi from "../image/Banner.jpg";
import Header from "../components/Header";
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
      title: "Checkmate",
      description: "Sign up portal for Checkmate Africa community",
      github: "https://github.com/mosesfawole/checkmate",
      live: "https://checkmate.africa/",
      technology: "React + Styled Components",
    },
    {
      title: "Checkmate",
      description: "Sign up portal for Checkmate Africa community",
      github: "https://github.com/mosesfawole/checkmate",
      live: "https://checkmate.africa/",
      technology: "React + Styled Components",
    },
    {
      title: "Checkmate",
      description: "Sign up portal for Checkmate Africa community",
      github: "https://github.com/mosesfawole/checkmate",
      live: "https://checkmate.africa/",
      technology: "React + Styled Components",
    },
    {
      title: "Checkmate",
      description: "Sign up portal for Checkmate Africa community",
      github: "https://github.com/mosesfawole/checkmate",
      live: "https://checkmate.africa/",
      technology: "React + Styled Components",
    },
    {
      title: "Checkmate",
      description: "Sign up portal for Checkmate Africa community",
      github: "https://github.com/mosesfawole/checkmate",
      live: "https://checkmate.africa/",
      technology: "React + Styled Components",
    },
    {
      title: "Checkmate",
      description: "Sign up portal for Checkmate Africa community",
      github: "https://github.com/mosesfawole/checkmate",
      live: "https://checkmate.africa/",
      technology: "React + Styled Components",
    },
    {
      title: "Checkmate",
      description: "Sign up portal for Checkmate Africa community",
      github: "https://github.com/mosesfawole/checkmate",
      live: "https://checkmate.africa/",
      technology: "React + Styled Components",
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
        when: "beforeChildVariants",
      },
    },
  };
  return (
    <div className="">
      {isLoading ? (
        <div className="loader">{<Loader />}</div>
      ) : (
        <>
          <Header />
          <div className="mobile md:hidden p-2 mt-2">
            <div className="flex justify-center">
              <img src="" alt="Logo" className="" />
            </div>
          </div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 gap-4 md:grid-cols-2"
          >
            <HeroText />

            <div className="right hidden md:grid projects md:relative  md:top-20 h-1/2 overflow-y-auto overflow-x-hidden ">
              <p className="text-white text-xl font-mono uppercase mb-10 font-bold text-center ">
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
