import { Projects } from "../components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { motion } from "framer-motion";
import HeroText from "../components/HeroText";
import { useState } from "react";
const Home = () => {
  const [projects, setProjetcs] = useState([
    {
      title: "Checkmate",
      description: "Sign up portal for Checkmate Africa community",
      github: "https://github.com/kadetXx/checkmate",
      live: "https://checkmate.africa/",
      stack: "React + Styled Components",
    },
  ]);
  return (
    <div className="">
      <Header />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="grid grid-cols-1 gap-4 md:grid-cols-2 overflow-hidden "
      >
        <HeroText />
        <div className="right projects md:relative  ">
          {projects.map((project, index) => (
            <Projects key={index} data={project} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
