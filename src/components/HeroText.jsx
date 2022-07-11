import { FaArrowRight } from "react-icons/fa";
import Footer from "./Footer";
import { motion } from "framer-motion";
import Avi from "../image/Banner.jpg";
import { Link } from "react-router-dom";
const HeroText = () => {
  const textVariants = {
    hidden: {
      opacity: 0,
      x: "-100vw",
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
    <div className="">
      <div className="md:hidden flex justify-center mx-auto mt-4 mb-6 avi">
        <img src={Avi} alt="" className="shadow-md " />
      </div>
      <motion.div
        variants={textVariants}
        hidden="hidden"
        animate="visible"
        className="hero-text flex px-4 flex-col md:fixed md:top-40  "
      >
        <h1 className="md:text-4xl   text-xl mb-4  md:mb-2 font-semibold">
          Hi, I'm Moses Fawole!
        </h1>
        <div className=" text-sm">
          <h2 className="text-sm mb-4 md:mt-10  ">
            I'm a{" "}
            <span className="text-gray-100 font-indie font-semibold">
              Frontend Developer
            </span>
            , and sometimes work with the{" "}
            <span className="text-gray-100 font-indie font-semibold">
              backend{" "}
            </span>{" "}
            using
            <span className="text-gray-100 font-indie font-semibold">
              {" "}
              the MERN Stack.{" "}
            </span>
          </h2>
          <p className="mb-4 md:mb-10 mt-2 md:mt-2  ">
            I create{" "}
            <span className="text-gray-100 font-indie font-semibold">
              interactive experiences
            </span>{" "}
            and{" "}
            <span className="text-gray-100 font-indie font-semibold">
              responsive
            </span>{" "}
            web applications using modern technology
            <br /> I'm{" "}
            <span className="text-white font-indie font-semibold">
              currently learning{" "}
            </span>
            the MERN Stack.
            <br />
          </p>
        </div>
        <div className="buttons mb-12 mt-4  md:hidden flex justify-center">
          <motion.button
            variants={buttonVariants}
            hidden="hidden"
            animate="visible"
            className="button flex text-gray-200 px-3 py-2 rounded-md "
          >
            <Link
              className="flex items-center text-md font-semibold"
              to="/projects"
            >
              Explore <FaArrowRight className="ml-2 items-center" />
            </Link>
          </motion.button>
        </div>
        <div className=" md:mt-10 ">
          <Footer />
        </div>
      </motion.div>
    </div>
  );
};

export default HeroText;
