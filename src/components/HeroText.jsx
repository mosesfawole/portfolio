import { FaArrowRight } from "react-icons/fa";
import Footer from "./Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const HeroText = () => {
  const textVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        when: "beforeChildren",
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
      // textShadow: "0px 0px 8px rgb(255,255,255",
      transition: {
        duration: 0.3,
        repeatType: "reverse",
        repeat: Infinity,
      },
    },
  };
  return (
    <motion.div
      variants={textVariants}
      hidden="hidden"
      animate="animate"
      className="hero-text p-8 flex flex-col md:fixed md:top-40  "
    >
      <h1 className="md:text-4xl   md:mb-2 font-semibold">
        Hi, I'm Moses Fawole!
      </h1>
      <div className="font-mono text-sm">
        <h2 className="text-sm md:mt-10  ">
          I'm a{" "}
          <span className="text-gray-100 font-semibold">
            Frontend Web Developer
          </span>
          , i build with the{" "}
          <span className="text-gray-100 font-semibold">
            MERN Stack (FE Heavy).{" "}
          </span>
        </h2>
        <p className="md:mb-10 mt-2  ">
          I write {""}
          <span className="text-gray-100 font-semibold">
            interactive experiences and responsive web applications
          </span>{" "}
          using modern web technologies. <br /> I'm{" "}
          <span className="text-white font-semibold">
            learning/improving on{" "}
          </span>
          the MERN Stack.
        </p>
      </div>
      <div className="buttons md:hidden  p-4 flex justify-center">
        <motion.button
          variants={buttonVariants}
          hidden="hidden"
          animate="visible"
          className="button flex m-2 text-gray-200 px-3 py-2 rounded-md "
        >
          <Link className="flex items-center" to="/projects">
            Explore <FaArrowRight className="ml-2 items-center" />
          </Link>
        </motion.button>
      </div>
      <div className="mt-4 md:mt-10 ">
        <Footer />
      </div>
    </motion.div>
  );
};

export default HeroText;
