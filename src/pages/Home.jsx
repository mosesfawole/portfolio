import { Projects } from "../components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { motion } from "framer-motion";
import HeroText from "../components/HeroText";
import { useState } from "react";
const Home = () => {
  const [isMenu, setisMenu] = useState(false);
  const [projects, setProjetcs] = useState([
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
  ]);
  return (
    <div className={isMenu ? "overflow-y-hidden" : ""}>
      <Header />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="md:relative grid grid-cols-1 gap-4 md:grid-cols-2 "
      >
        <HeroText />
        <div className="right overflow-y-scroll h-1/2 hidden md:grid  projects md:relative  md:top-20 ">
          <p className="text-white text-xl font-mono uppercase mb-10 font-bold text-center ">
            Projects
          </p>
          <div className=" hidden s md:grid md:grid-cols-2 gap-2 sm:grid-cols-2 shadow-md proj ">
            {projects.map((project, index) => (
              <div key={index} className="">
                <Projects data={project} />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
