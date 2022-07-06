import React from "react";
import Header from "../components/Header";
import { FaArrowLeft, FaArrowRight, FaDownload } from "react-icons/fa";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import HeroText from "../components/HeroText";
import { motion } from "framer-motion";
const Info = () => {
  const containerVariants = {
    hidden: {
      y: "-100vh",
    },
    visible: {
      y: 0,
      transition: {
        duration: 1,
        type: "spring",
        stiffness: 100,
        when: "beforeChildren",
        ease: "easeInOut",
      },
    },
  };
  return (
    <div className="">
      <Header />
      <div className="grid md:grid-cols-2 p-4">
        <div className="hidden md:block">
          <HeroText />
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="right grid resume p-4  md:relative md:top-20 "
        >
          <div className="flex justify-between">
            <p className="text-2xl text-white font-semibold">Moses Fawole</p>
            <span>
              <FaDownload />
            </span>
          </div>
          <div className="desc text-gray-400 text-sm ">
            I’m a frontend software developer, passionate about solving problems
            with code and transforming ideas from pixels to scalable products. I
            create usable applications with user experience as a top priority
            using various web tools, languages and technology.
          </div>
          <div className="section">
            <div className="title">
              <p className="text-white font-semibold">Core Technologies</p>
              <p className="skills text-sm text-gray-400">
                HTML/CSS, Javascript , React JS, Tailwind CSS, Next JS,
                CSS-in-JS, Redux, Bootstrap. Node js, Framer motion
              </p>
            </div>
            <div className="title">
              <p className="text-white font-semibold">Familiar with</p>
              <p className="skills text-sm text-gray-400">
                MongoDb, Express Js, Vue js, Graphql, Sanity cms, unit testing ,
                Material-Ui
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="flex md:hidden">
        <div className="buttons  p-4 flex justify-center">
          <button className="button flex m-2 text-gray-200 px-3 py-2 rounded-md ">
            <Link className="flex items-center" to="/projects">
              Explore <FaArrowRight className="ml-2 items-center" />
            </Link>
          </button>
        </div>
        <div className="buttons  p-4 flex justify-center">
          <button className="button flex m-2 text-gray-200 px-3 py-2 rounded-md ">
            <Link className="flex items-center" to="/projects">
              Explore <FaArrowRight className="ml-2 items-center" />
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Info;
