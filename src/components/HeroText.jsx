import { FaArrowRight } from "react-icons/fa";
import Footer from "./Footer";
import { motion } from "framer-motion";
import Avi from "../image/Banner.jpg";
import { Link } from "react-router-dom";
const HeroText = () => {
  const textVariants = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      when: "beforeChildren",
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };
  const buttonVariants = {
    hidden: {
      opacity: 0,
      scale: "0.5",
    },
    visible: {
      scale: 1.05,
      opacity: 1,
      // boxShadow: "0px 0px 8px rgb(255,255,255",
      textShadow: "0px 0px 8px rgb(255,255,255",
      transition: {
        duration: 0.3,
        repeatType: "reverse",
        repeat: Infinity,
      },
    },
  };
  return (
    <motion.div
      hidden={{ x: "-100vw" }}
      animate={{ x: 0 }}
      className="flex flex-col left md:top-40 md:p-10"
    >
      <div className="md:hidden flex  justify-center avi">
        <img src={Avi} alt="" className="shadow-md " />
      </div>
      <div className=" flex hero-text flex-col text-sm text-center  md:px-0 md:text-start text-gray-400 ">
        <h1 className=" text-3xl text-white mb-2 ">Hi, I'm Moses Fawole</h1>
        <h2 className=" text-sm mb-3 md:mt-10  ">
          I'm a{" "}
          <span className="text-white font-indie ">Frontend Developer</span>,
          and sometimes work with the{" "}
          <span className="text-white font-indie ">backend </span> using
          <span className="text-white font-indie "> the MERN Stack. </span>
        </h2>
        <p className="md:mb-10  md:mt-2  ">
          I create{" "}
          <span className="text-white font-indie ">
            interactive experiences
          </span>{" "}
          and <span className="text-white font-indie ">responsive</span> web
          applications using modern technology.
          <br /> I'm{" "}
          <span className="text-white font-indie ">currently learning </span>
          the MERN Stack.
          <br />
        </p>
      </div>
    </motion.div>
  );
};

export default HeroText;
